import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { PendingApprovalService } from './pending-approval.service';
import {
  CreatePendingApprovalDto,
  EApprovalStatus,
} from './dto/create-pending-approval.dto';
import { UpdatePendingApprovalDto } from './dto/update-pending-approval.dto';
import { PendingApprovalRepository } from './pending-approval.repository';
import { UserRepository } from '../user/user.repository';
import { OrgRepository } from '../org/org.repository';
import { CompanyRepository } from '../company/company.repository';
import { UserService } from '../user/user.service';
import { AccountRepository } from '../account/account.repository';
import { AccountService } from '../account/account.service';

@Controller('pending-approval')
export class PendingApprovalController {
  constructor(
    private readonly pendingApprovalService: PendingApprovalService,
    private readonly pendingApprovalRp: PendingApprovalRepository,
    private readonly companyRp: CompanyRepository,
    private readonly userRp: UserRepository,
    private readonly accountRp: AccountRepository,
    private readonly userSrvc: UserService,
    private readonly accountSrvc: AccountService,
    private readonly orgRp: OrgRepository,
  ) {}

  @Post()
  create(@Body() createPendingApprovalDto: CreatePendingApprovalDto) {
    const data = {
      ...createPendingApprovalDto,
      actionTakenBy: 1,
    };
    return this.pendingApprovalRp.create(data);
  }

  @Get()
  findAll() {
    return this.pendingApprovalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendingApprovalRp.findById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePendingApprovalDto: UpdatePendingApprovalDto,
  ) {
    return this.pendingApprovalService.update(+id, updatePendingApprovalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendingApprovalService.remove(+id);
  }

  @Post('approve/:id')
  async approve(@Param('id') id: number) {
    const approval = await this.pendingApprovalRp.findOne({
      id,
      status: EApprovalStatus.Pending,
    });

    if (!approval) return new BadRequestException(`No valid approval found.`);
    const { requestData } = approval;
    const requests = JSON.parse(requestData);
    for (const { currentUser: user, company, org } of requests) {
      try {
        const { id: organizationId } = await this.orgRp.create(org);
        await this.createNewUserAndAccount({ ...user, organizationId });
        await this.companyRp.create({ ...company, organizationId });
      } catch ({ message }) {
        return new BadRequestException(message);
      } finally {
        continue;
      }
    }

    return await this.pendingApprovalRp.update(
      { id },
      { status: EApprovalStatus.Approved },
    );
  }

  @Post('deny/:id')
  async deny(@Param('id') id: number) {
    const approval = await this.pendingApprovalRp.findOne({
      id,
      status: EApprovalStatus.Pending,
    });

    if (!approval) return new BadRequestException(`No valid approval found.`);
    return await this.pendingApprovalRp.update(
      { id },
      { status: EApprovalStatus.Decline },
    );
  }

  async createNewUserAndAccount(data: any) {
    const temporaryPassword = this.accountSrvc.generateTemporaryPassword();
    const password = await this.accountSrvc.getHashPassword(temporaryPassword);
    const {
      id: userId,
      email,
      firstname,
      lastname,
    } = await this.userRp.create(data);
    const account = await this.accountRp.create({
      ...data,
      email,
      userId,
      password,
    });
    this.userSrvc.sendTemporaryPassoword({
      password: temporaryPassword,
      email,
      name: `${firstname} ${lastname}`,
    });
  }
}

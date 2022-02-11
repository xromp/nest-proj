import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Public } from 'src/auth/auth.decorator';
import { AccountRepository } from './account.repository';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly accountRepository: AccountRepository,
  ) {}

  @Public()
  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    const password = await this.accountService.getHashPassword(
      createAccountDto.password,
    );
    return this.accountRepository.create({ ...createAccountDto, password });
  }

  @Public()
  @Get()
  findAll() {
    return this.accountRepository.findByQry({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Post('login')
  login(@Body() account: CreateAccountDto) {
    return this.accountRepository.findEmailAndPassword(account);
  }
}

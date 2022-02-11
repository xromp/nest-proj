import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { OrgRepository } from './org.repository';

@Controller('org')
export class OrgController {
  constructor(
    private readonly orgService: OrgService,
    private readonly orgRp: OrgRepository,
  ) {}

  @Post()
  create(@Body() createOrgDto: CreateOrgDto) {
    return this.orgRp.create(createOrgDto);
  }

  @Get()
  findAll() {
    return this.orgRp.findByQry({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orgService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgDto: UpdateOrgDto) {
    return this.orgService.update(+id, updateOrgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgService.remove(+id);
  }
}

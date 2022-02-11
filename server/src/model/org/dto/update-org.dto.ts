import { PartialType } from '@nestjs/swagger';
import { CreateOrgDto } from './create-org.dto';

export class UpdateOrgDto extends PartialType(CreateOrgDto) {}
export class GetOrgDto extends PartialType(CreateOrgDto) {}

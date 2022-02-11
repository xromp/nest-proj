import { PartialType } from '@nestjs/swagger';
import { CreateKpiLibraryDto } from './create-kpi-library.dto';

export class UpdateKpiLibraryDto extends PartialType(CreateKpiLibraryDto) {}
export class GetKpiLibraryDto extends PartialType(CreateKpiLibraryDto) {}

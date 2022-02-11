export class CreateDriverDto {
  id: number;
  name: string;
  description: string;
  abbreviation: string;
  kpiIndicator: string;
  uom: string;
  customUOM: string;
  period: string;
  aggregation: string;
  decimal: string;
  targetType: string;
  libraryId: string;
  createdBy: number;
  createdAt: Date;
}

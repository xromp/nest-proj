export class CreateCompanyDto {
  id: number;
  organizationId: number;
  name: string;
  phone: string;
  addressId: number;
  createdAt: Date;
  updatedAt: Date;
}

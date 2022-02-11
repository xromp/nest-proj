export class CreateOrgDto {
  id: number;
  name: string;
  code: string;
  timezone: string;
  phoneNumber: string;
  address: string;
  state: string;
  country: string;
  createdAt: Date;
}

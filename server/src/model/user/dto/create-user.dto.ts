export class CreateUserDto {
  id: number;
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
  organizationId: number;
  createdAt: Date;
}

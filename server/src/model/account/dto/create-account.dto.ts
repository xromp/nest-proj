export class CreateAccountDto {
  id: number;
  email: string;
  password: string;
  userId: number;
  active: boolean;
  createdAt: Date;
}

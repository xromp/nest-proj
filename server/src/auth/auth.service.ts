import { Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/model/account/account.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private accountRepository: AccountRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const account = await this.accountRepository.findOne({
      email,
    });
    if (account) {
      const isPasswordMatch = await bcrypt.compare(password, account?.password);
      if (isPasswordMatch) {
        const { password, ...result } = account;
        return result;
      }
    }
    return null;
  }

  async login(account: any) {
    const payload = { email: account.email, sub: account.userId };
    return {
      authToken: this.jwtService.sign(payload),
      ...account,
    };
  }

  async getHashPassword(password) {
    return await bcrypt.hash(password, process.env.SALT);
  }
}

import { Param } from '@nestjs/common';
import { EntityRepository, AbstractRepository } from 'typeorm';
import { GetAccountDto, UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@EntityRepository(Account)
export class AccountRepository extends AbstractRepository<Account> {
  create(account: CreateAccountDto) {
    return this.repository.save(account);
  }

  findByQry(param: GetAccountDto) {
    return this.repository.find(param);
  }

  findEmailAndPassword(param: GetAccountDto) {
    return this.repository.findOne(param);
  }

  findOne(criteria: GetAccountDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdateAccountDto, account: UpdateAccountDto) {
    return this.repository.update(criteria, account);
  }
}

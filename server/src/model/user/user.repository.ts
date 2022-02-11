import { Param } from '@nestjs/common';
import { EntityRepository, AbstractRepository } from 'typeorm';
import { GetUserDto, UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
  create(user: CreateUserDto) {
    return this.repository.save(user);
  }

  findByQry(param: GetUserDto) {
    return this.repository.find(param);
  }

  findEmailAndPassword(param: CreateUserDto) {
    return this.repository.findOne(param);
  }

  findOne(criteria: CreateUserDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdateUserDto, user: UpdateUserDto) {
    return this.repository.update(criteria, user);
  }
}

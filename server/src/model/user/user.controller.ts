import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userRp: UserRepository,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userRp.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userRp.findByQry({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

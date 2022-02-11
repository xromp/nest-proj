import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
} from '@nestjs/common';
import { ExceptionHandler } from 'winston';
import { DriverRepository } from './driver.repository';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(
    private readonly driverService: DriverService,
    private readonly driverRepository: DriverRepository,
  ) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverRepository.create(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driverRepository.findByQry({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}

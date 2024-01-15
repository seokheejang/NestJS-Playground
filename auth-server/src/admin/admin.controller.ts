import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  UseGuards,
  // Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
// import { UpdateAdminDto } from './dto/update-admin.dto';
import { Role } from '../enums/role.enum';
import { Roles } from '../roles/roles.decorator';
import { AuthGuard } from '../auth/auth.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.adminService.findOne(username);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
  //   return this.adminService.update(+id, updateAdminDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.adminService.remove(+id);
  // }
}

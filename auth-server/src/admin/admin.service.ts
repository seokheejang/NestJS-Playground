import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
// import { UpdateAdminDto } from './dto/update-admin.dto';
import { Role } from '../enums/role.enum';

@Injectable()
export class AdminService {
  roles: Role.Admin;
  private readonly admin = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin1234',
    },
  ];

  create(createAdminDto: CreateAdminDto) {
    return `This action adds a new admin : ${createAdminDto.username}`;
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(username: string) {
    const res = this.admin[0];
    res.username = username;
    return res;
  }

  // update(id: number, updateAdminDto: UpdateAdminDto) {
  //   return `This action updates a #${id} admin`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} admin`;
  // }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  createAdminUser(): string {
    // admin user 생성 로직을 추가
    return 'Admin user created';
  }
}

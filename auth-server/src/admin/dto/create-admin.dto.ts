import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty({ message: 'Username should not be empty' })
  @IsString({ message: 'Username should be a string' })
  username: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  @IsString({ message: 'Password should be a string' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string;
}

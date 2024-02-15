import { IsString } from 'class-validator';

export class CreateHelloDto {
  @IsString()
  readonly hello: string;
}

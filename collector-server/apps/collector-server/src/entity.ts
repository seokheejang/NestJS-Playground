import { ApiProperty } from '@nestjs/swagger';

export class Hello {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @ApiProperty({ example: 1, description: 'Api property test' })
  hello: string;
}

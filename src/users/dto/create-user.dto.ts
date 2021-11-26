import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@mail.ru',
  })
  readonly email: string;

  @ApiProperty({
    example: 'Test12345',
  })
  readonly password: string;
}

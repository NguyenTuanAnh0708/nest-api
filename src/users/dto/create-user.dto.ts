import { IsEmail, IsNotEmpty, IsEnum, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Intern', 'Engineer'], {
    message: 'Valid role required',
  })
  role: 'Intern' | 'Engineer';
}

import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(2)
  declare fullName: string;

  @IsEmail()
  declare email: string;

  @IsString()
  @MinLength(6)
  declare password: string;
}

import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';
import { Role } from 'src/common/enums/role.enum';

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MaxLength(255)
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  about_me?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  role?: Role;
}

import { UsersProgressService } from './users-progress.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserProgressDto } from './dto/create-user-progress.dto';
import { UserProgress } from './entities/user-progress.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';

@Auth(Role.USER)
@Controller('users-progress')
export class UsersProgressController {
  constructor(private usersProgressService: UsersProgressService) { }

  @Get()
  findAll() {
    return this.usersProgressService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.usersProgressService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() createUserProgressDto: CreateUserProgressDto): Promise<UserProgress> {
    return this.usersProgressService.create(createUserProgressDto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateUserProgressDto: CreateUserProgressDto): Promise<UserProgress> {
    return this.usersProgressService.update(parseInt(id), updateUserProgressDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.usersProgressService.remove(parseInt(id));
  }
}

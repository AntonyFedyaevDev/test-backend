import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 200,
    type: User,
  })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiResponse({
    status: 200,
    type: [User],
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}

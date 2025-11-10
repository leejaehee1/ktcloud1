import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  createUser(@Body() user: any) {
    return this.userService.createUser(user);
  }
}

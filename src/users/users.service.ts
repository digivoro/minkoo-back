import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  private readonly users = [
    {
      id: 1,
      firstName: 'john',
      email: 'john@randomn.org',
      password: 'changeme',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'maria',
      email: 'maria@random.org',
      password: 'guess',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

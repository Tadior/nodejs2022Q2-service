import { Injectable } from '@nestjs/common';
import { User } from 'src/types/apiTypes';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  getAllUsers(): User[] {
    return this.users;
  }
  create(body: User): User {
    this.users.push(body);
    return body;
  }
}

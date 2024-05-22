import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // Fake Database users
  private users = [
    {
      id: 0,
      name: 'Nguyen Tuan Anh',
      role: 'Intern',
    },
    {
      id: 1,
      name: 'Tran Yen Nhi',
      role: 'Develop',
    },
  ];

  findAll(role?: 'Intern' | 'Engineer') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: { name: string; email: string; role: 'Intern' | 'Engineer' }) {
    const userHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'Intern' | 'Engineer';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updatedUser,
        };
      } else {
        return user;
      }
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}

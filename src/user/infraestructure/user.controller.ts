import { UserUseCase } from "../application/user.usercase";
import { User } from "../domain/entities/user.entity";
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  async insert(user: User) {
    return this.userUseCase.insert(user);
  }

  async getAll(isActive: boolean) {
    return this.userUseCase.getAll(isActive);
  }

  async getOne(id: string | number) {
    return this.userUseCase.getOne(id);
  }

  async getByPage(page: number) {
    return this.userUseCase.getByPage(page);
  }

  async update(id: string | number, user: User) {
    return this.userUseCase.update(id, user);
  }

  async delete(id: string | number) {
    return this.userUseCase.delete(id);
  }
}

import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository";
import bcrypt from "bcryptjs";
import yenv from "yenv";

const env = yenv();
export class UserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async insert(user: User) {
    const password = await bcrypt.hash(user.password, 10);
    user.password = password;

    const result = await this.repository.insert(user);
    return result;
  }

  async getAll(isActive: boolean) {
    const results = await this.repository.getAll({ isActive: true });

    return results;
  }

  async getOne(id: string | number) {
    const result = await this.repository.getById(id);
    return result;
  }

  async getByPage(page: number) {
    const result = await this.repository.getByPage(
      { isActive: true },
      page,
      env.PAGINATION.PAGE_SIZE
    );
    return result;
  }

  async update(id: string | number, user: User) {
    const result = this.repository.update(id, user);
    return result;
  }

  async delete(id: string | number) {
    const result = await this.repository.delete(id);
    return result;
  }
}

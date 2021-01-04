import { Console } from 'console';
import { User } from '../../entities/user.model';
import { UserUseCase } from '../application/user.usercase';
export class UserController {
	constructor(private readonly userUseCase: UserUseCase) {}

	async insert(user: Partial<User>) {
		return this.userUseCase.insert(user);
	}

	async getAll(isActive: boolean) {
		return this.userUseCase.getAll(isActive);
	}

	async getOne(id: number) {
		return this.userUseCase.getOne(id);
	}

	async getByPage(page: number) {
		return this.userUseCase.getByPage(page);
	}

	async update(id: number, user: User) {
		return this.userUseCase.update(id, user);
	}

	async delete(id: number) {
		return this.userUseCase.delete(id);
	}
}

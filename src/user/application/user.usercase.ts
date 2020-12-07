import { User } from '../domain/entities/user.entity';
import { UserRepository } from '../domain/repositories/user.repository';
import yenv from 'yenv';
import { Tokens } from '../../auth/application/auth.service';

const env = yenv();
export class UserUseCase {
	constructor(private readonly repository: UserRepository) {}

	async insert(user: User) {
		user.refreshToken = Tokens.generateRefreshToken();

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

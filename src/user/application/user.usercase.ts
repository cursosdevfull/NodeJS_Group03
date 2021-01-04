import yenv from 'yenv';
import { Tokens } from '../../auth/application/auth.service';
import { IRepository } from '../../repositories/irepository';
import { IRole } from '../../role/domain/role.interface';
import { IUser } from '../domain/user.interface';
import * as bcrypt from 'bcryptjs';

const env = yenv();
export class UserUseCase {
	constructor(
		private readonly repository: IRepository<IUser>,
		private readonly repositoryRole: IRepository<IRole>
	) {}

	async insert(user: Partial<IUser>) {
		const roles = user.roles;
		const passwordHash = await bcrypt.hash(user.password, 10);

		user.password = passwordHash;

		const listPromises: any = [];
		roles.forEach(id => {
			const promise = this.repositoryRole.getById(+id);
			listPromises.push(promise);
		});

		const rolesToLink: IRole[] = await Promise.all(listPromises);
		user.roles = rolesToLink;
		user.refreshToken = Tokens.generateRefreshToken();

		const result = await this.repository.insert(user);
		return result;
	}

	async getAll(isActive: boolean) {
		const results = await this.repository.getAll({ isActive: true }, ['roles']);

		return results;
	}

	async getOne(id: number) {
		const result = await this.repository.getById(id);
		return result;
	}

	async getByPage(page: number) {
		const result = await this.repository.getByPage(
			page,
			env.PAGINATION.PAGE_SIZE
		);
		return result;
	}

	async update(id: number, user: IUser) {
		const result = this.repository.update(user, { id });
		return result;
	}

	async delete(id: number) {
		const result = await this.repository.delete(id);
		return result;
	}

	async getAllData(roleName: string) {
		const result = await this.repository.getAllData(roleName);
		return result;
	}
}

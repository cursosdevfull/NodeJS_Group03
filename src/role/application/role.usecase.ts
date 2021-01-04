import yenv from 'yenv';
import { IRepository } from '../../repositories/irepository';
import { IRole } from '../domain/role.interface';

const env = yenv();
export class RoleUseCase {
	constructor(private readonly repository: IRepository<IRole>) {}

	async insert(role: Partial<IRole>) {
		const result = await this.repository.insert(role);
		return result;
	}

	async getAll(isActive: boolean) {
		const results = await this.repository.getAll({ isActive: true });

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

	async update(id: number, role: IRole) {
		const result = this.repository.update(role, { id });
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

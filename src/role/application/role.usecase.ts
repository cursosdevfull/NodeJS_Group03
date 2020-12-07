import { Role } from '../domain/entities/role.entity';
import { RoleRepository } from '../domain/repositories/role.repository';
import yenv from 'yenv';

const env = yenv();
export class RoleUseCase {
	constructor(private readonly repository: RoleRepository) {}

	async insert(role: Role) {
		const result = await this.repository.insert(role);
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

	async update(id: string | number, role: Role) {
		const result = this.repository.update(id, role);
		return result;
	}

	async delete(id: string | number) {
		const result = await this.repository.delete(id);
		return result;
	}
}

import { RoleUseCase } from '../application/role.usecase';
import { Role } from '../domain/entities/role.entity';
export class RoleController {
	constructor(private readonly roleUseCase: RoleUseCase) {}

	async insert(role: Role) {
		return this.roleUseCase.insert(role);
	}

	async getAll(isActive: boolean) {
		return this.roleUseCase.getAll(isActive);
	}

	async getOne(id: string | number) {
		return this.roleUseCase.getOne(id);
	}

	async getByPage(page: number) {
		return this.roleUseCase.getByPage(page);
	}

	async update(id: string | number, role: Role) {
		return this.roleUseCase.update(id, role);
	}

	async delete(id: string | number) {
		return this.roleUseCase.delete(id);
	}
}

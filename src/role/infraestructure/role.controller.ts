import { RoleUseCase } from '../application/role.usecase';
import { IRole } from '../domain/role.interface';
export class RoleController {
	constructor(private readonly roleUseCase: RoleUseCase) {}

	async insert(role: Partial<IRole>) {
		return this.roleUseCase.insert(role);
	}

	async getAll(isActive: boolean) {
		return this.roleUseCase.getAll(isActive);
	}

	async getOne(id: number) {
		return this.roleUseCase.getOne(id);
	}

	async getByPage(page: number) {
		return this.roleUseCase.getByPage(page);
	}

	async update(id: number, role: IRole) {
		return this.roleUseCase.update(id, role);
	}

	async delete(id: number) {
		return this.roleUseCase.delete(id);
	}
}

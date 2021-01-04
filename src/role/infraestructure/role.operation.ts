import GenericDatabaseRepository from '../../repositories/generic.repository';
import { Role } from '../../entities/role.model';
export class RoleOperation extends GenericDatabaseRepository<Role> {
	constructor() {
		super(Role);
	}

	async getAllData(roleName: string): Promise<any> {
		return Promise.resolve([]);
	}
}

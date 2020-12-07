import GenericDatabaseRepository from '../../repositories/generic.repository';
import RoleModel from './role.model';
import { RoleType } from './role.type';
export class RoleOperation extends GenericDatabaseRepository<
	typeof RoleModel,
	RoleType
> {
	constructor() {
		super(RoleModel);
	}
}

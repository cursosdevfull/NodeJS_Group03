import GenericDatabaseRepository from '../../repositories/generic.repository';
import UserModel from './user.model';
import { UserType } from './user.type';
export class UserOperation extends GenericDatabaseRepository<
	typeof UserModel,
	UserType
> {
	constructor() {
		super(UserModel);
	}
}

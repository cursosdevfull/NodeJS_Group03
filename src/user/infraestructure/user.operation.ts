import GenericDatabaseRepository from '../../repositories/generic.repository';
import { User } from '../../entities/user.model';
export class UserOperation extends GenericDatabaseRepository<User> {
	constructor() {
		super(User);
	}
}

import { getRepository } from 'typeorm';
import { User } from '../../entities/user.model';
import { AuthRepository } from '../domain/repositories/auth.repository';

export class AuthOperation implements AuthRepository {
	async login(user: User): Promise<User> {
		const repository = getRepository<User>('user');
		const response = await repository.findOne(
			{ email: user.email },
			{ relations: ['roles'] }
		);
		return response;
	}
}

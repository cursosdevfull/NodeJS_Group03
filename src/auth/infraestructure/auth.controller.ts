import { User } from '../../entities/user.model';
import { AuthUseCase } from '../application/auth.usecase';
export class AuthController {
	constructor(private readonly authUseCase: AuthUseCase) {}

	async login(user: Partial<User>) {
		return this.authUseCase.login(user);
	}
}

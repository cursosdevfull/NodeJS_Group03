import { User } from '../../user/domain/entities/user.entity';
import bcrypt from 'bcryptjs';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { Tokens } from './auth.service';
import { RoleTokenDto } from './role-token.dto';

export class AuthUseCase {
	constructor(private readonly repository: AuthRepository) {}

	async login(user: User) {
		const response: User = await this.repository.login(user);
		const { name, roles, password, refreshToken } = response;
		const userMatched = { name, roles, password, refreshToken };

		const userRoles = RoleTokenDto(userMatched.roles);
		userMatched.roles = userRoles;

		if (userMatched) {
			const matched = await bcrypt.compare(user.password, userMatched.password);

			if (matched) {
				return {
					accessToken: Tokens.generateAccessToken(userMatched),
					refreshToken: userMatched.refreshToken,
				};
			}

			return null;
		}
		return null;
	}
}

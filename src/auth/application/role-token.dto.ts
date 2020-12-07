import { Role } from '../../role/domain/entities/role.entity';
import { RoleTokenRepository } from '../domain/role-token.repository';

const RoleTokenDto = (roles: Role[]): RoleTokenRepository[] => {
	const rolesToken: RoleTokenRepository[] = roles.map(role => {
		const newRole: RoleTokenRepository = { name: role.name };
		return newRole;
	});

	return rolesToken;
};

export { RoleTokenDto };

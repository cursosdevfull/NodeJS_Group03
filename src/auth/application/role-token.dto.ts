import { IRole } from '../../role/domain/role.interface';
import { RoleTokenRepository } from '../domain/role-token.repository';

const RoleTokenDto = (roles: IRole[]): RoleTokenRepository[] => {
	const rolesToken: RoleTokenRepository[] = roles.map(role => {
		const newRole: RoleTokenRepository = { name: role.name };
		return newRole;
	});

	return rolesToken;
};

export { RoleTokenDto };

import { IUser } from '../../../user/domain/user.interface';

export interface AuthRepository {
	login(user: Partial<IUser>): Promise<IUser>;
}

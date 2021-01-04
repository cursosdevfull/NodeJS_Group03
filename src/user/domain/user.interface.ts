export interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
	isActive: boolean;
	refreshToken: string;
	photo: string;
	roles: any[];
}

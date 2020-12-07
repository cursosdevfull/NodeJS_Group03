export interface User {
	name?: string;
	email?: string;
	password?: string;
	isActive?: boolean;
	refreshToken?: string;
	roles?: Array<any>;
	photo?: string;
}

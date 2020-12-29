import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.model';

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 100 })
	name: string;

	@Column('varchar', { length: 100 })
	email: string;

	@Column('varchar', { length: 100 })
	password: string;

	@Column('bool')
	isActive: boolean;

	@Column('varchar', { length: 200 })
	refreshToken: string;

	@Column('varchar', { length: 100 })
	photo: string;

	@OneToMany(type => Role, role => role.user)
	roles: Role[];
}

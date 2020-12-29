import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.model';

@Entity({ name: 'role' })
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 100 })
	name: string;

	@Column('boolean')
	isActive: boolean;

	@ManyToOne(type => User, user => user.roles)
	user: User;
}

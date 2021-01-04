import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'role' })
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 100 })
	name: string;

	@Column('boolean')
	isActive: boolean;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'medic' })
export class Medic {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 100 })
	name: string;

	@Column('varchar', { length: 100 })
	surname: string;

	@Column('varchar', { length: 100 })
	lastname: string;

	@Column('varchar', { length: 10 })
	cmp: string;

	@Column('varchar', { length: 10 })
	dni: string;

	@Column('varchar', { length: 100 })
	email: string;

	@Column('varchar', { length: 100 })
	photo: string;

	@Column('bool')
	isActive: boolean;
}

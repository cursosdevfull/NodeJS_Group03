import yenv from 'yenv';
import { IRepository } from '../../repositories/irepository';
import { IMedic } from '../domain/medic.interface';

const env = yenv();
export class MedicUseCase {
	constructor(private readonly repository: IRepository<IMedic>) {}

	async insert(medic: Partial<IMedic>) {
		const result = await this.repository.insert(medic);
		return result;
	}

	async getAll(isActive: boolean) {
		const results = await this.repository.getAll({ isActive: true });

		return results;
	}

	async getOne(id: number) {
		const result = await this.repository.getById(id);
		return result;
	}

	async getByPage(page: number) {
		const result = await this.repository.getByPage(
			page,
			env.PAGINATION.PAGE_SIZE
		);
		return result;
	}

	async update(id: number, medic: IMedic) {
		const result = this.repository.update(medic, { id });
		return result;
	}

	async delete(id: number) {
		const result = await this.repository.delete(id);
		return result;
	}

	async getAllData(roleName: string) {
		const result = await this.repository.getAllData(roleName);
		return result;
	}
}

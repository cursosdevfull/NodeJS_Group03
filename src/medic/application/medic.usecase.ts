import { Medic } from '../domain/entities/medic.entity';
import { MedicRepository } from '../domain/repositories/medic.repository';
import yenv from 'yenv';

const env = yenv();
export class MedicUseCase {
	constructor(private readonly repository: MedicRepository) {}

	async insert(medic: Medic) {
		const result = await this.repository.insert(medic);
		return result;
	}

	async getAll(isActive: boolean) {
		const results = await this.repository.getAll({ isActive: true });

		return results;
	}

	async getOne(id: string | number) {
		const result = await this.repository.getById(id);
		return result;
	}

	async getByPage(page: number) {
		const result = await this.repository.getByPage(
			{ isActive: true },
			page,
			env.PAGINATION.PAGE_SIZE
		);
		return result;
	}

	async update(id: string | number, medic: Medic) {
		const result = this.repository.update(id, medic);
		return result;
	}

	async delete(id: string | number) {
		const result = await this.repository.delete(id);
		return result;
	}
}

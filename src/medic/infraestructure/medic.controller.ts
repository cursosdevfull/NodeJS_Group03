import { Medic } from '../../entities/medic.model';
import { MedicUseCase } from '../application/medic.usecase';
export class MedicController {
	constructor(private readonly medicUseCase: MedicUseCase) {}

	async insert(medic: Partial<Medic>) {
		return this.medicUseCase.insert(medic);
	}

	async getAll(isActive: boolean) {
		return this.medicUseCase.getAll(isActive);
	}

	async getOne(id: number) {
		return this.medicUseCase.getOne(id);
	}

	async getByPage(page: number) {
		return this.medicUseCase.getByPage(page);
	}

	async update(id: number, medic: Medic) {
		return this.medicUseCase.update(id, medic);
	}

	async delete(id: number) {
		return this.medicUseCase.delete(id);
	}

	async getAllData(roleName: string) {
		return this.medicUseCase.getAllData(roleName);
	}
}

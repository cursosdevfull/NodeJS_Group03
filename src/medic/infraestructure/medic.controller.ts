import { MedicUseCase } from "../application/medic.usecase";
import { Medic } from "../domain/entities/medic.entity";
export class MedicController {
  constructor(private readonly medicUseCase: MedicUseCase) {}

  async insert(medic: Medic) {
    return this.medicUseCase.insert(medic);
  }

  async getAll(isActive: boolean) {
    return this.medicUseCase.getAll(isActive);
  }

  async getOne(id: string | number) {
    return this.medicUseCase.getOne(id);
  }

  async update(id: string | number, medic: Medic) {
    console.log("medic", medic);
    return this.medicUseCase.update(id, medic);
  }

  async delete(id: string | number) {
    return this.medicUseCase.delete(id);
  }
}

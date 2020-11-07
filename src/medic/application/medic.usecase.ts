import { Medic } from "../domain/entities/medic.entity";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicUseCase {
  constructor(private readonly repository: MedicRepository) {}

  async insert(medic: Medic) {
    return this.repository.insert(medic);
  }

  async getAll(isActive: boolean) {
    return this.repository.get(isActive);
  }

  async getOne(id: string | number) {
    return this.repository.getOne(id);
  }

  async update(id: string | number, medic: Medic) {
    return this.repository.update(id, medic);
  }

  async delete(id: string | number) {
    return this.repository.delete(id);
  }
}

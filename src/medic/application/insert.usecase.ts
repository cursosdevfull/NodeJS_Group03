import { Medic } from '../domain/entities/medic.entity';
import { MedicRepository } from '../domain/repositories/medic.repository';

export class InsertMedic {
  /*   private repository: MedicRepository

  constructor(repository: MedicRepository) {
    this.repository = repository
  } */

  constructor(private readonly repository: MedicRepository) {}

  insert(medic: Medic) {
    this.repository.insert(medic);
  }
}

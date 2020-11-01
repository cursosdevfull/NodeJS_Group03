import { InsertMedic } from '../application/insert.usecase';
import { Medic } from '../domain/entities/medic.entity';
export default class MedicController {
  constructor(private readonly inserMedic: InsertMedic) {}

  insert(medic: Medic) {
    this.inserMedic.insert(medic);
  }
}

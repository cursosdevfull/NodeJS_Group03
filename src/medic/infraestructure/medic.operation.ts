import { Medic } from '../domain/entities/medic.entity';
import { MedicRepository } from '../domain/repositories/medic.repository';

export default class MedicOperation implements MedicRepository {
  insert(medic: Medic): Medic {
    return medic;
  }
  update(id: string | number, medic: Medic): Medic {
    return medic;
  }
  get(isActive: boolean): Medic[] {
    const listMedic: Medic[] = [];
    return listMedic;
  }
  getOne(id: string | number): Medic {
    const medic: Medic = {};
    return medic;
  }
  delete(id: string | number): Medic {
    const medic: Medic = {};
    return medic;
  }
}

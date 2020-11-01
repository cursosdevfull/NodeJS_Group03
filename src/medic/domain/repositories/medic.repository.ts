import { Medic } from '../entities/medic.entity';

export interface MedicRepository {
  insert(medic: Medic): Medic;
  update(id: string | number, medic: Medic): Medic;
  get(isActive: boolean): Array<Medic>;
  getOne(id: string | number): Medic;
  delete(id: string | number): Medic;
}

import { Medic } from "../entities/medic.entity";

export interface MedicRepository {
  insert(medic: Medic): Promise<Medic>;
  update(id: string | number, medic: Medic): Promise<Medic>;
  get(isActive: boolean): Promise<Array<Medic>>;
  getOne(id: string | number): Promise<Medic>;
  delete(id: string | number): Promise<Medic>;
}

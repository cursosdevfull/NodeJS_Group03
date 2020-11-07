import { GenericOperation } from "../../generic/generic.operation";
import { Medic } from "../domain/entities/medic.entity";
/* import { MedicRepository } from "../domain/repositories/medic.repository"; */

export class MedicOperation implements GenericOperation<Medic> {
  async insert(medic: Medic): Promise<Medic> {
    return medic;
  }
  async update(id: string | number, medic: Medic): Promise<Medic> {
    return medic;
  }
  async get(isActive: boolean): Promise<Medic[]> {
    const listMedic: Medic[] = [];
    return listMedic;
  }
  async getOne(id: string | number): Promise<Medic> {
    const medic: Medic = {};
    return medic;
  }
  async delete(id: string | number): Promise<Medic> {
    const medic: Medic = {};
    return medic;
  }
}

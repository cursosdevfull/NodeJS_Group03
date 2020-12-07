import { IRepository } from '../../../repositories/irepository';
import { Medic } from '../entities/medic.entity';

export interface MedicRepository extends IRepository<Medic> {
	getByLocations(): void;
}

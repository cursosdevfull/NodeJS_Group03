import GenericDatabaseRepository from '../../repositories/generic.repository';
import MedicModel from './medic.model';
import { MedicType } from './medic.type';
export class MedicOperation extends GenericDatabaseRepository<
	typeof MedicModel,
	MedicType
> {
	constructor() {
		super(MedicModel);
	}

	getByLocations() {
		console.log('List medics by locations');
	}
}

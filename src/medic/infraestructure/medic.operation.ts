import GenericDatabaseRepository from '../../repositories/generic.repository';
import MedicModel from './medic.model';
import { MedicType } from './medic.type';
import { getRedis, setRedis } from '../../bootstrap/redis.bootstrap';
export class MedicOperation extends GenericDatabaseRepository<
	typeof MedicModel,
	MedicType
> {
	constructor() {
		super(MedicModel);
	}

	async getAll(filter: any = {}): Promise<MedicType[]> {
		const medicsCache = await getRedis('APP_MEDICS');
		if (medicsCache) {
			console.log('Returned from cache');
			return JSON.parse(medicsCache);
		}

		const items: any = await MedicModel.find(filter);

		setRedis('APP_MEDICS', JSON.stringify(items));
		return items;
	}

	getByLocations() {
		console.log('List medics by locations');
	}
}

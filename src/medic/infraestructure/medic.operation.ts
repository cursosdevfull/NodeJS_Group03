import { Medic } from '../../entities/medic.model';
import GenericDatabaseRepository from '../../repositories/generic.repository';
import { getRedis, setRedis } from '../../bootstrap/redis.bootstrap';
import { Repository, getRepository, getManager } from 'typeorm';
export class MedicOperation extends GenericDatabaseRepository<Medic> {
	constructor() {
		super(Medic);
	}

	async getAll(
		where: any = {},
		relations: string[] = [],
		order: any = {}
	): Promise<any> {
		/* 		const medicsCache = await getRedis('APP_MEDICS');
		if (medicsCache) {
			console.log('Returned from cache');
			return Promise.resolve(JSON.parse(medicsCache));
		} */
		const repository: Repository<Medic> = getRepository<Medic>(Medic);
		const records = await repository.find({
			where,
			relations,
			order,
		});

		/* 	setRedis('APP_MEDICS', JSON.stringify(records)); */

		return records;
	}

	async getAllData(roleName: string) {
		const entityManager = getManager();
		console.log(`call sp_list_medic("${roleName}")`);
		const notifications: any[] = await entityManager.query(
			`call sp_list_medic("${roleName}")`
		);
		return notifications;
	}
}

import { getRepository, Repository } from 'typeorm';
export type ObjectType<T> = { new (): T };
export default abstract class GenericDatabaseRepository<T> {
	private entity: ObjectType<T>;

	constructor(entity: ObjectType<T>) {
		this.entity = entity;
	}

	async getAll(
		where: any = {},
		relations: string[] = [],
		order: any = {}
	): Promise<any> {
		const repository: Repository<T> = getRepository<T>(this.entity);
		const records = await repository.find({
			where,
			relations,
			order,
		});

		return records;
	}

	async getByPage(
		page: number,
		pageSize: number,
		where: any = {},
		relations: string[] = [],
		order: any = {}
	): Promise<any> {
		const repository: Repository<T> = getRepository<T>(this.entity);
		const [records, totalRecords] = await repository.findAndCount({
			where,
			order,
			relations,
			skip: page * pageSize,
			take: pageSize,
		});

		return [records, totalRecords];
	}

	async getById(id: number, relations: string[] = []): Promise<any> {
		const repository: Repository<T> = getRepository<T>(this.entity);
		const record = await repository.findOne(id, { relations });

		return record;
	}

	async insert(record: T): Promise<any> {
		const repository: Repository<T> = getRepository<T>(this.entity);
		const recordInserted: T = await repository.save(record);

		return recordInserted;
	}

	async update(record: T, where: any, relations: string[] = []): Promise<any> {
		const repository: Repository<T> = getRepository<T>(this.entity);
		const recordToUpdate = await repository.findOne({ where, relations });

		for (const prop in record) {
			if (recordToUpdate[prop]) {
				recordToUpdate[prop] = record[prop];
			}
		}

		await repository.save(recordToUpdate);

		return recordToUpdate;
	}

	async delete(id: number): Promise<any> {
		const repository: Repository<T> = getRepository<T>(this.entity);
		const recordToDelete = await repository.findOne(id);

		if (recordToDelete) {
			await repository.delete(id);
			return recordToDelete;
		}

		return null;
	}
}

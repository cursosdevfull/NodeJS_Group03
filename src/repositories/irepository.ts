export interface IRepository<U> {
	getAll(where?: any, relations?: any, order?: any): Promise<Array<any>>;
	getByPage(
		page: Number,
		pageSize: number,
		where?: any,
		relations?: string[],
		order?: any
	): Promise<any>;
	getById(id: number, relations?: string[]): Promise<any>;
	insert(record: Partial<U>): Promise<any>;
	update(record: U, where: any, relations?: string[]): Promise<any>;
	delete(id: number): Promise<any>;
	getAllData(roleName: string):Promise<any>
}

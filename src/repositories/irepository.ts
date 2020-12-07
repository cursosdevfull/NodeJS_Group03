export interface IRepository<U> {
	insert(item: U): Promise<U>;
	update(id: string | number, item: U): Promise<U>;
	getAll(filter: any): Promise<Array<U>>;
	getById(id: string | number): Promise<U>;
	getByPage(
		filter: any,
		page: number,
		pageSize: number
	): Promise<{ total: number; items: Array<U> }>;
	delete(id: string | number): Promise<U>;
}

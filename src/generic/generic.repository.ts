export interface GenericRepository<T> {
  insert(entity: T): Promise<T>;
  update(id: string | number, entity: T): Promise<T>;
  get(isActive: boolean): Promise<Array<T>>;
  getOne(id: string | number): Promise<T>;
  delete(id: string | number): Promise<T>;
}

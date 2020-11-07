import { GenericRepository } from "./generic.repository";

export abstract class GenericOperation<T> implements GenericRepository<T> {
  abstract insert(entity: T): Promise<T>;
  abstract update(id: string | number, entity: T): Promise<T>;
  abstract get(isActive: boolean): Promise<T[]>;
  abstract getOne(id: string | number): Promise<T>;
  abstract delete(id: string | number): Promise<T>;
}

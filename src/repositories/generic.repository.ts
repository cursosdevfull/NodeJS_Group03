import { Model } from "mongoose";
import { IRepository } from "./irepository";

export default abstract class GenericDatabaseRepository<T extends Model<any>, U>
  implements IRepository<U> {
  private model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll(filter: any = {}): Promise<U[]> {
    const items: U[] = await this.model.find(filter);
    return items;
  }

  async getById(id: number | string): Promise<U> {
    const item: U = await this.model.findById(id);
    return item;
  }

  async getByPage(
    filter: any,
    page: number,
    pageSize: number
  ): Promise<{ total: number; items: U[] }> {
    const items: U[] = await this.model
      .find(filter)
      .skip(page * pageSize)
      .limit(pageSize);

    const total: number = await this.model.find(filter).count();

    return { total, items };
  }

  async insert(item: U): Promise<U> {
    const itemInserted: U = await this.model.create(item);
    return itemInserted;
  }

  async update(id: number | string, item: U): Promise<U> {
    console.log(id);
    console.log(item);
    const itemUpdated: U = await this.model.findByIdAndUpdate(id, item, {
      new: true,
    });
    return itemUpdated;
  }

  async delete(id: number | string): Promise<U> {
    const itemDeleted: U = await this.model.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );
    return itemDeleted;
  }
}

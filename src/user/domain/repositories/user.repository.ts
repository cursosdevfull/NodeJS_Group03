import { IRepository } from "../../../repositories/irepository";
import { User } from "../entities/user.entity";

export interface UserRepository extends IRepository<User> {}

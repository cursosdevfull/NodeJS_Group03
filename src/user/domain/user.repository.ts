import { User } from '../../entities/user.model';
import { IRepository } from '../../repositories/irepository';

export type UserRepository = IRepository<User>;

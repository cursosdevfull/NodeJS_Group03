import { User } from "../../../user/domain/entities/user.entity";

export interface AuthRepository {
  login(user: User): Promise<User>;
}

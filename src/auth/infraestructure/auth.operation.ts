import { User } from "../../user/domain/entities/user.entity";
import UserModel from "../../user/infraestructure/user.model";
import { UserType } from "../../user/infraestructure/user.type";
import { AuthRepository } from "../domain/repositories/auth.repository";

export class AuthOperation implements AuthRepository {
  async login(user: User): Promise<User> {
    const response: UserType = await UserModel.findOne({
      email: user.email,
    }).populate("roles");

    return response;
  }
}

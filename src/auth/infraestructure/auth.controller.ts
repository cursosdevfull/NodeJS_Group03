import { User } from "../../user/domain/entities/user.entity";
import { AuthUseCase } from "../application/auth.usecase";
export class AuthController {
  constructor(private readonly authUseCase: AuthUseCase) {}

  async login(user: User) {
    return this.authUseCase.login(user);
  }
}

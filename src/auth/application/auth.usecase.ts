import { User } from "../../user/domain/entities/user.entity";
import bcrypt from "bcryptjs";
import { AuthRepository } from "../domain/repositories/auth.repository";
import { Tokens } from "./auth.service";

export class AuthUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async login(user: User) {
    const userMatched: User = await this.repository.login(user);

    if (userMatched) {
      const matched = await bcrypt.compare(user.password, userMatched.password);

      if (matched) {
        return {
          accessToken: Tokens.generateAccessToken(userMatched),
          refreshToken: userMatched.refreshToken,
        };
      }

      return null;
    } else {
      return null;
    }
  }
}

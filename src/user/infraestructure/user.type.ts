import { User } from "../domain/entities/user.entity";
import { Document } from "mongoose";

export type UserType = User & Document;

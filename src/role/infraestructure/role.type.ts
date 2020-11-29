import { Role } from "../domain/entities/role.entity";
import { Document } from "mongoose";

export type RoleType = Role & Document;

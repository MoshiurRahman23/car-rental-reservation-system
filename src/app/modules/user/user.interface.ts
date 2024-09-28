import { Model } from "mongoose";

export type TUser = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string;
};

export type UserMethods = {
  isUserExists(id: string): Promise<TUser | null>;
}

export type UserModel = Model<TUser, Record<string, never>, UserMethods>;
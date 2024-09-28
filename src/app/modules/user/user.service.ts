import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (userData: TUser) => {
  const user = await User.create(userData);
  if (await user.isUserExists(userData.id)) {
    throw new Error('User is already Exists');
  }
  const result = await user.save();
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await User.findOne({ id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};

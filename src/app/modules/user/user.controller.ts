import { Request, Response } from "express";
import { UserServices } from "./user.service";

const userCreate = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserServices.createUserIntoDB(userData);

    res.status(200).json({
      success: true,
      message: "User created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "User are retrieved Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "User is retrieved Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  userCreate,
  getAllUsers,
  getSingleUser,
};

import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./user.validation";

const userCreate = async (req: Request, res: Response) => {
    try {
        const { user: userData } = req.body;

        const zodParseData = userValidationSchema.parse(userData);

        const result = await UserServices.createUserIntoDB(zodParseData);

        res.status(200).json({
            success: true,
            message: "User created Successfully",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        });
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

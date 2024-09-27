import express from "express";
import { UserController } from "./user.controller";

const route = express.Router();
route.post("/create-user", UserController.userCreate);
route.get("/", UserController.getAllUsers);
route.get("/:userId", UserController.getSingleUser);

export const UserRoutes = route;

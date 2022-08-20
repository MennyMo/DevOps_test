import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();

userRoutes.get('/', UserController.getUsers);
userRoutes.get('/:userId', UserController.getUser);
userRoutes.post('/', UserController.createUser);

export default userRoutes;

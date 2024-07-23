import express from 'express'; 
import { createUserController, getUsersController, deleteUserController, getUserByIdController, validateCredentialController } from '../controllers/usersControllers'; 

const userRouter = express.Router(); 

userRouter.post('/register', createUserController);

userRouter.get('/', getUsersController);

userRouter.delete('/:id', deleteUserController);

userRouter.get('/:id', getUserByIdController);

userRouter.post('/login', validateCredentialController);

export default userRouter; 
import { Request, Response } from 'express'; 
import  UserDto from '../dto/UserDto'; 
import { createUserService, getUsersService, deleteUserService, getUserByIdService } from "../services/usersService" 
import {findUserByCredentialId, validateCredential} from "../services/credentialService"
import { User } from '../entities/User';
import UserRepository from '../repositories/UserRepository';

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: UserDto = req.body; 
        const newUser = await createUserService(userData); 
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creando el usuario' }); // Maneja cualquier error
    }
};

// Controlador para obtener todos los usuarios
export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users:User[] = await getUsersService(); 
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' }); // Maneja cualquier error
    }
};

// Controlador para eliminar un usuario por su ID
export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = parseInt(req.params.id); // Obtén el ID del usuario de los parámetros de la solicitud
        await deleteUserService(userId); // Llama a la función del servicio para eliminar el usuario
        res.status(204).end(); // Responde con éxito sin contenido
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user.' }); // Maneja cualquier error
    }
};

// Controlador para obtener un usuario por su ID
export const getUserByIdController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user: User | null = await getUserByIdService(Number(id))
        res.status(200).json(user);
    }catch(error){
        res.status(404).json({message: "El usuario no fue encontrado."})
    }
};

export const validateCredentialController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;// Obtén el nombre de usuario y la contraseña del cuerpo de la solicitud
         const credential = await validateCredential(username, password); // Llama a la función del servicio para validar las credenciales
        if(credential)
            { 
                const user = await findUserByCredentialId(credential)
                res.status(200).json({ loggin:true, user }); // Responde con un objeto que indica si las credenciales son válidas o no
            }
        
    } catch (error) {
        res.status(400).json({ message: 'Los datos son incorrectos.' }); // Maneja cualquier error
    }
};
//{loggin:true, user}
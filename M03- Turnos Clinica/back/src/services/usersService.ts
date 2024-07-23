
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import { createCredential } from "./credentialService";
import UserRepository from "../repositories/UserRepository";
import { Credential } from "../entities/Credential";


export const createUserService = async (userData: UserDto) => {
    try {
        const credeId: Credential = await createCredential(userData.username, userData.password);
        const newUser = {
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni,
            credentials: credeId,
            appointments: []
        };
        const user = await UserRepository.create(newUser);
        const result = await UserRepository.save(user);
        return user;
    } catch (error) {
        console.log("Error al crear usuario:", error);
        throw error; // Re-lanzar el error para que sea manejado en un nivel superior si es necesario
    }
        
    
}

export const getUsersService = async ():Promise<User[]> => {
    const users = await UserRepository.find();
    return users
};


export const deleteUserService = async (id: number): Promise<void> => {
    const user = await UserRepository.findOne({ where: { id } });
    if (user) {
        await UserRepository.remove(user);
    } else {
        throw new Error(`User with id ${id} not found.`);
    }
};

//export const getUserByIdService = (id: number): IUser | undefined => {
//    return usersArray.find(user => user.id === id);
//  }

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await UserRepository.findOne({ where:{id}, relations:{appointments:true}
    })
    return user;
}
  

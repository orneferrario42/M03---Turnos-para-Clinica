import CredentialRepository from "../repositories/CredentialRepository";
import { Credential } from "../entities/Credential";
import UserRepository from "../repositories/UserRepository";
import { User } from "../entities/User";

export const createCredential = async (username: string, password: string)=> {
    try {
        const newCredential = {
            username,
            password,
        };
        const credential = await CredentialRepository.create(newCredential);
        await CredentialRepository.save(credential);
        
        return credential;
    } catch (error) {
        throw new Error("Error al crear credencial: " + (error instanceof Error ? error.message : "Unknown error"));
    }
};

export const validateCredential = async (username: string, password: string): Promise<Credential | null> => {
    try {
        const credential = await CredentialRepository.findOne({ where: { username, password } });

        if (credential) {
            return credential; // Si se encuentra una credencial, devuelve true
        } else {
            throw new Error('Credenciales incorrectas'); // Si no se encuentra una credencial, lanza un error
        }
    } catch (error) {
        throw new Error("Error al validar credencial: " + (error instanceof Error ? error.message : "Unknown error"));
    }
};
export const findUserByCredentialId = async(id: Credential): Promise <User | null> => {

    const user: User | null = await UserRepository.findOne({where:{credentials:(id)}})
    return user;
}


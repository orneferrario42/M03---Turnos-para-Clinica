import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import AppointmentRepository from "./AppointmentRepository";

const UserRepository = AppDataSource.getRepository(User).extend({
    //encuentra un usuario por id
    findById: async function(id:number): Promise<User | null> {
        const user = await this.findOneBy({ id })
        if(user) return user
        else throw Error("Invalid ID")
    },
    //metodo para ver si existe un user por id
    checkById: async function (id:number): Promise <boolean> {
        const user = await this.findById(id);
        return !!user;//doble negacion del user devuelve el valor de verdad de user
    },
   //userTurns: async function (id:number):Promise <Appointment[] | null>{
   //    const appointments: Appointment[] = AppointmentRepository.
   //}
})

export default UserRepository
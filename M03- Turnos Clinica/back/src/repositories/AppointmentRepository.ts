import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
    findById: async function (id:number):Promise<Appointment | null> {
        const appointment = await this.findOneBy({id})
        if(appointment) return appointment
        else throw Error("Invalid ID")
    },
    checkById: async function (id:number): Promise <boolean> {
        const appointment = await this.findById(id);
        return !!appointment;//doble negacion del user devuelve el valor de verdad de user
    },
    //findByUser: async function (userID: number): Promise<Appointment[] | null> {
//        const allAppointments = await this.find();
//        const userAppointments = allAppointments.filter(appointment => appointment.userId === userID);
//        return userAppointments;
    //}
});

export default AppointmentRepository;
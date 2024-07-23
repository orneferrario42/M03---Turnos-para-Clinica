import { Appointment } from "../entities/Appointment";
import { getUserByIdService } from "./usersService";
import AppointmentRepository from "../repositories/AppointmentRepository";

let appointments:Appointment[] = [];
let id: number = 1;

export const getAllAppointment = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentRepository.find();
    console.log("Appointments:", appointments); // Agregar este log
    return appointments;
}

export const createAppointment = async (userId: number, date: Date, time: string) => {
    try {
        const user = await getUserByIdService(userId);
        if (!user) {
            console.error("El usuario no existe");
            return null;
        }

        const newAppointment = {
            date,
            time,
            userId
        };
        
        const appointment = await AppointmentRepository.create(newAppointment);
        await AppointmentRepository.save(appointment);
        return appointment;
    } catch (error) {
        console.error("Error al crear la cita:", error);
        throw error; 
    }
}

export const cancelAppointment = async (appointmentId: number): Promise<void> => {
    try {
        const appointment = await AppointmentRepository.findOne({ where: { id: appointmentId } });
        if (!appointment){
            console.error("La cita no existe");
            throw new Error("La cita no existe"); 
        } 
        appointment.status = "cancelled";
        await AppointmentRepository.save(appointment);
    } catch (error) {
        console.error("Error al cancelar la cita:", error);
        throw error; 
    }
}

export const getAppointmentById = async (id: number): Promise<Appointment | null>=> {
    try {
            return await AppointmentRepository.findOne({ where:{id}, relations: ["userId"]
            })
            
        
    } catch (error) {
        console.error("Error al obtener la cita por ID:", error);
        throw error;
    }
}
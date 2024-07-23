import { Request, Response } from 'express';
import { createAppointment, cancelAppointment, getAppointmentById, getAllAppointment } from '../services/appointmentService';
import UserDto from '../dto/UserDto';

export const getAllAppointmentsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointments = await getAllAppointment(); // Esperar a que se resuelva la promesa
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error al obtener todas las citas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const createAppointmentController = async (req: Request, res: Response): Promise<void> => {
  const { userId, date, time } = req.body;
  console.log(userId)
  try {
    const appointment = await createAppointment(userId, date, time);
    if (appointment) {
      res.status(201).json(appointment);
    } else {
      res.status(400).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    console.error("Error al crear la cita:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const cancelAppointmentController = async (req: Request, res: Response): Promise<void> => {
    const appointmentId = parseInt(req.params.id);
    try {
      await cancelAppointment(appointmentId);
      res.status(200).json({ message: "Cita cancelada exitosamente" });
    } catch (error) {
      console.error("Error al cancelar la cita:", error);
      res.status(404).json({ message: "El turno no fue encontrado." });
    }
  }

export const getAppointmentByIdController = async (req: Request, res: Response): Promise<void> => {
  const appointmentId = parseInt(req.params.id);
  try {
    const appointment = await getAppointmentById(appointmentId);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ message: "Cita no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener la cita por ID:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

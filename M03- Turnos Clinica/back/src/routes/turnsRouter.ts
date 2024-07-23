import express from 'express';
import { getAllAppointmentsController, createAppointmentController, cancelAppointmentController, getAppointmentByIdController } from "../controllers/appointmentControllers";

const router = express.Router();

const appointmentRouter = router

// Ruta para obtener todas las citas
appointmentRouter.get('/', getAllAppointmentsController);

// Ruta para crear una nueva cita
appointmentRouter.post('/schedule', createAppointmentController);

// Ruta para cancelar una cita específica
appointmentRouter.put('/cancel/:id', cancelAppointmentController);

// Ruta para obtener una cita por su ID
appointmentRouter.get('/:id', getAppointmentByIdController);

export default appointmentRouter;
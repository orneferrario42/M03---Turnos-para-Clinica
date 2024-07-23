import {DataSource} from 'typeorm'
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "divinas(L)",
    database: "centromedico",
    // dropSchema:true,//borra la base de datos, sirve para desarrollo
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: []
})

export const AppointmentModel = AppDataSource.getRepository(Appointment)
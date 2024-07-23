import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: string;

    @Column()
    nDni: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, appointment => appointment.userId)
    @JoinColumn()
    appointments: Appointment[];
}

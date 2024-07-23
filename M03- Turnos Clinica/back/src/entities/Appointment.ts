import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments"
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => User, user => user.appointments)
  @JoinColumn({ name: "userId" }) // Define el nombre de la columna en la tabla "appointments"
  userId: number;


  @Column({
    default: "active"
  })
  status: "active" | "cancelled";
}
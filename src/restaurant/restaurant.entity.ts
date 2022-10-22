import { Reservation } from "src/reservation/reservation.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn('uuid')
    id : string 

    @OneToMany(()=> Reservation , (reservation)=> reservation.restaurant)
    reservations: Reservation[]

    @Column()
    waiting_time:string

    
}
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Reservation {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @ManyToOne(()=> Restaurant, (restaurant )=>restaurant.reservations)
    restaurant : Restaurant 



}
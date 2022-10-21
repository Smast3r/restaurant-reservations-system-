import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity() 
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    mobile: string 

    @Column()
    work_days
    
    

}
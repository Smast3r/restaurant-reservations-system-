import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class Client{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    mobile : string
    
    // to be continued    






} 
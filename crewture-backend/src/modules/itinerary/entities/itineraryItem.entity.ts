import { Trip } from "src/modules/trip/entities/trip.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'itineraryitem'})
export class ItineraryItem {

    @PrimaryGeneratedColumn({ type: 'integer' })
    id!: number;
    
    @Column({ name: 'uuid', type: 'uuid', generated: 'uuid', unique: true })
    uuid!: string;

    @Column({name: 'itemDate', type: 'date', nullable: true})
    itemDate!: Date

    @Column({name: 'type', type: 'enum', enum: ['actividad', 'restaurante', 'entretenimiento', 'alojamiento', 'transporte', 'otro'], default: 'otro'})
    type!: string;

    @Column({name: 'title', type: 'varchar', length: 80, nullable: false})
    title!: string;

    @Column({name: 'notes', type: 'varchar', length: 80, nullable: true})
    notes!: string;

    @Column({name: 'location', type: 'varchar', nullable: true})
    location!: string;

    @Column({name: 'startTime', type: 'time', nullable: true})
    startTime!: string;

    @Column({name: 'endTime', type: 'time', nullable: true})
    endTime!: string;

    @ManyToOne(() => Trip, trip => trip.itineraryItems)
    @JoinColumn({name: 'tripId'})
    trip!: Trip;

    @ManyToOne(() => User, user => user.itineraryItems)
    @JoinColumn({name: 'userId'})
    user!: User;
}

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./trip.entity";
import { User } from "src/modules/users/entities/user.entity";

@Entity({name: 'tripmember'})
export class TripMember{

    @PrimaryGeneratedColumn({name: 'id', type: 'integer'})
    id!: number;

    @Column({name: 'uuid', type: 'uuid', generated: 'uuid', unique: true})
    uuid!: string;

    @Column({name: 'role', type: 'enum', enum: ['owner', 'member'], default: 'member'})
    role!: string;

    @CreateDateColumn({ name: 'joinedAt', type: 'timestamp with time zone' })
    joinedAt!: Date;

    @ManyToOne(() => Trip, trip => trip.members)
    @JoinColumn({name: 'tripId'})
    trip!: Trip;
    
    @ManyToOne(() => User, user => user.tripMember)
    @JoinColumn({name: 'userId'})
    user!: User;
}
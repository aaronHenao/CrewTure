import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TripMember } from "./tripmember.entity";
import { Expense } from "src/modules/expense/entities/expense.entity";
import { ItineraryItem } from "src/modules/itinerary/entities/itineraryItem.entity";

@Entity({name: 'trip'})
export class Trip {
    @PrimaryGeneratedColumn({name: 'id', type: 'integer'})
    id!: number;

    @Column({name: 'uuid', type: 'uuid', generated: 'uuid', unique: true})
    uuid!: string;

    @Column({name: 'title', type: 'varchar', length: 80, nullable: false})
    title!: string;

    @Column({name: 'description', type: 'varchar', nullable: true})
    description!: string;

    @Column({name: 'startDate', type: 'date', nullable: true})
    startDate!: Date

    @Column({name: 'endDate', type: 'date', nullable: true})
    endDate!: Date

    @Column({name: 'currency', type: 'varchar', nullable: false, default: 'COP'})
    currency!: string;

    @CreateDateColumn({name: 'createdAt', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date

    @OneToMany(() => TripMember, tripmember => tripmember.trip)
    members!: TripMember[];

    @OneToMany(() => Expense, expense => expense.trip)
    expenses!: Expense[];

    @OneToMany(()=> ItineraryItem, itineraryItem => itineraryItem.trip)
    itineraryItems!: ItineraryItem[]

}

import { Expense } from "src/modules/expense/entities/expense.entity";
import { ExpenseSplit } from "src/modules/expense/entities/expensesplit.entity";
import { ItineraryItem } from "src/modules/itinerary/entities/itineraryItem.entity";
import { TripMember } from "src/modules/trip/entities/tripmember.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({name: 'id', type: 'integer'})
    id!: number;

    @Column({name: 'uuid', type: 'uuid', generated: 'uuid', unique: true})
    uuid!: string;

    @Column({name: 'googleID', type: 'varchar', unique: true})
    googleID!: string;

    @Column({name: 'email', type: 'varchar', unique: true})
    email!: string;

    @Column({name: 'firstName', type: 'varchar'})
    firstName!: string;

    @Column({name: 'lastName', type: 'varchar'})
    lastName!: string;

    @Column({name: 'avatar', type: 'varchar', nullable: true})
    avatar!: string;

    @CreateDateColumn({name: 'createdAt', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date

    @OneToMany(()=> TripMember, tripMember => tripMember.user)
    tripMember!: TripMember[]

    @OneToMany(() => Expense, expense => expense.paidBy)
    expenses!: Expense[];

    @OneToMany(() => ExpenseSplit, split => split.user)
    splits!: ExpenseSplit[];

    @OneToMany(() => ItineraryItem, itineraryItem => itineraryItem.user)
    itineraryItems!: ItineraryItem[];

}

import { Trip } from "src/modules/trip/entities/trip.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExpenseSplit } from "./expensesplit.entity";

@Entity({name: 'expense'})
export class Expense {

    @PrimaryGeneratedColumn({name: 'id', type: 'integer'})
    id!: number;

    @Column({ name: 'uuid', type: 'uuid', generated: 'uuid', unique: true })
    uuid!: string;

    @Column({name: 'title', type: 'varchar', length: 80, nullable: false})
    title!: string;

    @Column({name: 'category', type: 'enum', enum: ['comida', 'transporte', 'entretenimiento', 'alojamiento', 'otro'], default: 'otro'})
    category!: string;

    @Column({name: 'amount', type: 'decimal'})
    amount!: number;

    @Column({name: 'expenseDate', type: 'date', nullable: true})
    expenseDate!: Date

    @Column({ name: 'receiptUrl', type: 'varchar', nullable: true })
    receiptUrl!: string;

    @CreateDateColumn({name: 'createdAt', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date
    
    @ManyToOne(() => Trip, trip => trip.expenses)
    @JoinColumn({name: 'tripId'})
    trip!: Trip

    @ManyToOne(()=> User, user => user.expenses)
    @JoinColumn({ name: 'paidBy' })
    paidBy!: User

    @OneToMany(() => ExpenseSplit, split => split.expense)
    splits!: ExpenseSplit[];

}

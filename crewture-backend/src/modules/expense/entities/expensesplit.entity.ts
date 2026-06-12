import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from "./expense.entity";
import { User } from "src/modules/users/entities/user.entity";

@Entity({ name: 'expense_split' })
export class ExpenseSplit {

  @PrimaryGeneratedColumn({ type: 'integer' })
  id!: number;

  @Column({ name: 'uuid', type: 'uuid', generated: 'uuid', unique: true })
  uuid!: string;

  @Column({ name: 'amountOwed', type: 'decimal' })
  amountOwed!: number;

  @Column({ name: 'settled', type: 'boolean', default: false })
  settled!: boolean;

  @ManyToOne(() => Expense, expense => expense.splits)
  @JoinColumn({ name: 'expenseId' })
  expense!: Expense;

  @ManyToOne(() => User, user => user.splits)
  @JoinColumn({ name: 'userId' })
  user!: User;
}
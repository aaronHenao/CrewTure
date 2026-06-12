import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { ExpenseSplit } from './entities/expensesplit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense, ExpenseSplit])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}

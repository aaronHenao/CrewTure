import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {

    @IsNotEmpty({message: 'El gasto debe tener un titulo'})
    title!: string

    @IsString()
    category!: string;

    @IsNumber()
    amount!: number;

    @Type(() => Date)
    @IsDate()
    expenseDate!: Date

    @IsString()
    receiptUrl!: string;
    
}

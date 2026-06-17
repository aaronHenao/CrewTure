import { IsBoolean, IsDecimal, IsNumber } from "class-validator";

export class CreateSplitDto {

    @IsNumber()
    amountOwed!: number;

    @IsBoolean()
    settled!: boolean;

}
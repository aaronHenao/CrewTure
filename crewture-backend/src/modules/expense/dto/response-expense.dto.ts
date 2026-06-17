import { Expose, Type } from "class-transformer";
import { ResponseTripDto } from "src/modules/trip/dto/response-trip.dto";
import { ResponseUserDto } from "src/modules/users/dto/reponse-user.dto";
import { ResponseSplitDto } from "./response-split.dto";

export class ResponseExpenseDto {

    @Expose()
    uuid!: string;

    @Expose()
    title!: string;

    @Expose()
    category!: string;

    @Expose()
    amount!: number;

    @Expose()
    expenseDate!: Date

    @Expose()
    receiptUrl!: string;

    @Expose()
    @Type(() => ResponseUserDto)
    paidBy! : ResponseUserDto;


    @Expose()
    @Type(() => ResponseSplitDto)
    splits!: ResponseSplitDto[];


}
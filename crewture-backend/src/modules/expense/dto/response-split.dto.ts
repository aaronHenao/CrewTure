import { Expose, Type } from "class-transformer";
import { ResponseExpenseDto } from "./response-expense.dto";
import { ResponseUserDto } from "src/modules/users/dto/reponse-user.dto";

export class ResponseSplitDto {

    @Expose()
    uuid!: string;

    @Expose()
    amountOwed!: number;

    @Expose()
    settled!: boolean;

    @Expose()
    @Type(() => ResponseUserDto)
    user! : ResponseUserDto;

}
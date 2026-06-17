import { Expose, Type } from "class-transformer";
import { ResponseMemberDto } from "./reponse-member.dto";
import { ResponseExpenseDto } from "src/modules/expense/dto/response-expense.dto";
import { ResponseItineraryItemDto } from "src/modules/itinerary/dto/response-itinerary.dto";

export class ResponseTripDto{

    @Expose()
    uuid!: string;

    @Expose()
    title!: string;

    @Expose()
    description?: string;

    @Expose()
    startDate!: Date

    @Expose()
    endDate!: Date

    @Expose()
    currency!: string;

    @Expose()
    @Type(() => ResponseMemberDto)
    members?: ResponseMemberDto[];

    @Expose()
    @Type(() => ResponseExpenseDto)
    expenses!: ResponseExpenseDto[];

    @Expose()
    @Type(() => ResponseItineraryItemDto)
    itineraryItems!: ResponseItineraryItemDto[];
}
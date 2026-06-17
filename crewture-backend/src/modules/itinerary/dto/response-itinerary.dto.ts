import { Expose, Type } from "class-transformer";
import { ResponseTripDto } from "src/modules/trip/dto/response-trip.dto";
import { ResponseUserDto } from "src/modules/users/dto/reponse-user.dto";

export class ResponseItineraryItemDto {

    @Expose()
    uuid!: string;

    @Expose()
    itemDate!: Date

    @Expose()
    type!: string;

    @Expose()
    title!: string;

    @Expose()
    notes!: string;

    @Expose()
    location!: string;

    @Expose()
    startTime!: string;

    @Expose()
    endTime!: string;

    @Expose()
    @Type(() => ResponseUserDto)
    user! : ResponseUserDto;
}
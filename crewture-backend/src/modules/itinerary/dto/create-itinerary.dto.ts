import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateItineraryDto {

    @Type(() => Date)
    @IsDate()
    itemDate!: Date

    @IsString()
    type!: string;

    @IsNotEmpty({message: 'El item debe tener un título'})
    @IsString()
    title!: string;

    @IsString()
    notes!: string;

    @IsString()
    location!: string;

    @IsString()
    startTime!: string;

    @IsString()
    endTime!: string;
}

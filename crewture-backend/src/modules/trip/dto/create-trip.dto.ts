import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateTripDto {

    @IsNotEmpty({message: 'El viaje debe tener un título'})
    title!: string

    @IsString()
    description!: string;

    @Type(() => Date)
    @IsDate()
    startDate!: Date

    @Type(() => Date)
    @IsDate()
    endDate!: Date

    @IsNotEmpty({message: 'Es obligatorio ingresar el tipo de moneda'})
    @IsString()
    currency!: string;

}

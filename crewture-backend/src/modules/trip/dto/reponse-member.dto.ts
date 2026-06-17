import { Expose } from "class-transformer";

export class ResponseMemberDto {

    @Expose()
    uuid!: string;

}
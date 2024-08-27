import { Module } from "@nestjs/common";
import { PostalController } from "./postal.controller";

@Module({
    controllers: [PostalController]
})
export class PostalModule {

}
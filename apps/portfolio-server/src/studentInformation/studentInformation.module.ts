import { Module } from "@nestjs/common";
import { StudentInformationModuleBase } from "./base/studentInformation.module.base";
import { StudentInformationService } from "./studentInformation.service";
import { StudentInformationController } from "./studentInformation.controller";
import { StudentInformationResolver } from "./studentInformation.resolver";

@Module({
  imports: [StudentInformationModuleBase],
  controllers: [StudentInformationController],
  providers: [StudentInformationService, StudentInformationResolver],
  exports: [StudentInformationService],
})
export class StudentInformationModule {}

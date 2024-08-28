import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentInformationService } from "./studentInformation.service";
import { StudentInformationControllerBase } from "./base/studentInformation.controller.base";

@swagger.ApiTags("studentInformations")
@common.Controller("studentInformations")
export class StudentInformationController extends StudentInformationControllerBase {
  constructor(protected readonly service: StudentInformationService) {
    super(service);
  }
}

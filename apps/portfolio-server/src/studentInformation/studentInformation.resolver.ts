import * as graphql from "@nestjs/graphql";
import { StudentInformationResolverBase } from "./base/studentInformation.resolver.base";
import { StudentInformation } from "./base/StudentInformation";
import { StudentInformationService } from "./studentInformation.service";

@graphql.Resolver(() => StudentInformation)
export class StudentInformationResolver extends StudentInformationResolverBase {
  constructor(protected readonly service: StudentInformationService) {
    super(service);
  }
}

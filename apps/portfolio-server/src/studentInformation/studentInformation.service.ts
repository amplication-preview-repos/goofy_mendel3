import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentInformationServiceBase } from "./base/studentInformation.service.base";

@Injectable()
export class StudentInformationService extends StudentInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

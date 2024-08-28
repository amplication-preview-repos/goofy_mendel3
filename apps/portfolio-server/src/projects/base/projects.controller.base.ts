/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProjectsService } from "../projects.service";
import { ProjectsCreateInput } from "./ProjectsCreateInput";
import { Projects } from "./Projects";
import { ProjectsFindManyArgs } from "./ProjectsFindManyArgs";
import { ProjectsWhereUniqueInput } from "./ProjectsWhereUniqueInput";
import { ProjectsUpdateInput } from "./ProjectsUpdateInput";

export class ProjectsControllerBase {
  constructor(protected readonly service: ProjectsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Projects })
  async createProjects(
    @common.Body() data: ProjectsCreateInput
  ): Promise<Projects> {
    return await this.service.createProjects({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        link: true,
        techStack: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Projects] })
  @ApiNestedQuery(ProjectsFindManyArgs)
  async projectsItems(@common.Req() request: Request): Promise<Projects[]> {
    const args = plainToClass(ProjectsFindManyArgs, request.query);
    return this.service.projectsItems({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        link: true,
        techStack: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Projects })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async projects(
    @common.Param() params: ProjectsWhereUniqueInput
  ): Promise<Projects | null> {
    const result = await this.service.projects({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        link: true,
        techStack: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Projects })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProjects(
    @common.Param() params: ProjectsWhereUniqueInput,
    @common.Body() data: ProjectsUpdateInput
  ): Promise<Projects | null> {
    try {
      return await this.service.updateProjects({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          link: true,
          techStack: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Projects })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProjects(
    @common.Param() params: ProjectsWhereUniqueInput
  ): Promise<Projects | null> {
    try {
      return await this.service.deleteProjects({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          link: true,
          techStack: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

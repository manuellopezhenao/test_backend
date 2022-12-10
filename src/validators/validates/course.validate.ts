import { Request, Response, NextFunction } from "express";
import {
  createCourseSchema,
  deleteCourseSchema,
  updateCourseSchema,
} from "../schemas/course.schema.validator";
import { ValidaSchema } from "../../helpers/validate_result";

const validateCreateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, createCourseSchema);

const validateUpdateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, updateCourseSchema);

const validateDeleteCourse = (
  req: Request,
  res: Response,
  
  next: NextFunction
) => ValidaSchema(req, res, next, deleteCourseSchema);

export { validateCreateCourse, validateUpdateCourse, validateDeleteCourse };

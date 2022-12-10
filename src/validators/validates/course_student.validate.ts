import { Request, Response, NextFunction } from "express";
import { ValidaSchema } from "../../helpers/validate_result";
import {
  createCourseStudentSchema,
  deleteCourseStudentSchema,
} from "../schemas/course_students.schema.validator";

const validateCreateCourseStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, createCourseStudentSchema);

const validateDeleteCourseStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, deleteCourseStudentSchema);

export { validateCreateCourseStudent, validateDeleteCourseStudent };

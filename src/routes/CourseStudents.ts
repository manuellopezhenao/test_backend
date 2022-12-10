import * as express from "express";
import {
  CreateCourseStudents,
  DeleteCourseStudents,
  ListCourseStudents,
} from "../controllers/CourseStudents";
import {
  validateCreateCourseStudent,
  validateDeleteCourseStudent,
} from "../validators/validates/course_student.validate";

const router = express.Router();

router.get("/coursestudents", ListCourseStudents);
router.post(
  "/linkcoursestudent",
  validateCreateCourseStudent,
  CreateCourseStudents
);
router.delete(
  "/unlinkcoursestudent",
  validateDeleteCourseStudent,
  DeleteCourseStudents
);

module.exports = router;

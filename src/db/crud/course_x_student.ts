import { CourseStudentInterface } from "../../class/courses_x_students";
import { TestCourses } from "../models/courses";
import { TestCoursesXStudent } from "../models/courses_x_student";
import { TestStudents } from "../models/students";

const ListCourseStudent = async () => {
  try {
    const courseStudent = await TestCoursesXStudent.findAll({
      include: [{ model: TestStudents }, { model: TestCourses }],
    });
    return courseStudent;
  } catch (err) {
    console.log(err);
    throw new Error("Can't list Course for students");
  }
};

const CreateCourseStudent = async (courseStudent: CourseStudentInterface) => {
  try {

    const existCourseStudent = await TestCoursesXStudent.findOne({
      where: {
        c_id: courseStudent.c_id,
        s_id: courseStudent.s_id,
      },
    });

    if (existCourseStudent) {
      throw new Error("Course for student already exist");
    }

    const newCourseStudent = await TestCoursesXStudent.create({
      c_id: courseStudent.c_id,
      s_id: courseStudent.s_id,
    });
    return newCourseStudent;
  } catch (err) {

    if (err.message === "Course for student already exist") {
      throw new Error("Course for student already exist");
    }

    throw new Error("Can't create course for student");
  }
};

const UpdateCourseStudent = async (courseStudent: CourseStudentInterface) => {
  try {
    const courseStudentUpdate = await TestCoursesXStudent.update(
      {
        c_id: courseStudent.c_id,
        s_id: courseStudent.s_id,
      },
      {
        where: {
          cxs_id: courseStudent.cxs_id,
        },
      }
    );
    return courseStudentUpdate;
  } catch (err) {
    throw new Error("Can't update course for student");
  }
};

const DeleteCourseStudent = async (cxs_id: number, c_id: number, s_id: number) => {
  try {

    if (cxs_id) {
      const courseStudentDelete = await TestCoursesXStudent.destroy({
        where: {
          cxs_id: cxs_id,
        },
      });
      return courseStudentDelete;
    }else{
      const courseStudentDelete = await TestCoursesXStudent.destroy({
        where: {
          c_id: c_id,
          s_id: s_id,
        },
      });
      return courseStudentDelete;
    }
    
  } catch (err) {
    throw new Error("Can't delete course for student");
  }
};

export {
  ListCourseStudent,
  CreateCourseStudent,
  UpdateCourseStudent,
  DeleteCourseStudent,
};

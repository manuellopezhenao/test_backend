import { TestCourses } from "./models/courses";
import { TestCoursesXStudent } from "./models/courses_x_student";
import { TestStudents } from "./models/students";


TestCoursesXStudent.hasOne(TestStudents, {foreignKey: 's_id', sourceKey: 's_id'});
TestCoursesXStudent.hasOne(TestCourses, {foreignKey: 'c_id', sourceKey: 'c_id'});
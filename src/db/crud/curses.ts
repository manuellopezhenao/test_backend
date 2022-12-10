import { CourseInterface } from "../../class/course";
import { TestCourses } from "../models/courses"


const ListCurses = async () => {
    try {
        const curses = await TestCourses.findAll();
        return curses;
    } catch (err) {
        throw new Error("Can't list courses");
    }
}

const CreateCurses = async (course: CourseInterface) => {
    try {
        const curse = await TestCourses.create({
            name: course.name,
            credits: course.credits
        });
        return curse;
    } catch (err) {
        throw new Error("Can't create course");
    }
}

const UpdateCurses = async (course: CourseInterface) => {
    try {
        console.log(course);
        const curse = await TestCourses.update({
            name: course.name,
            credits: course.credits
        }, {
            where: {
                c_id: course.c_id
            }
        });
        return curse;
    } catch (err) {
        console.log(err);
        throw new Error("Can't update course");
    }
}

const DeleteCurses = async (id: number) => {
    try {
        const curse = await TestCourses.destroy({
            where: {
                c_id: id
            }
        });
        return curse;
    } catch (err) {
        throw new Error("Can't delete course");
    }
}



export { ListCurses, CreateCurses, UpdateCurses, DeleteCurses };
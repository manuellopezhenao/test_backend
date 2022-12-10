import { StudentsInterface } from "../../class/students";
import { TestStudents } from "../models/students";


const ListStudents = async () => {
    try {
        const students = await TestStudents.findAll();
        return students;
    } catch (err) {
        console.log(err);
        throw new Error("Can't list students");
    }
}

const CreateStudents = async (students: StudentsInterface) => {
    try {
        const student = await TestStudents.create({
            first_name: students.first_name,
            last_name: students.last_name,
            lv_id: students.lv_id,
            group: students.group,
            email: students.email,
            phone_number: students.phone_number,
            geolocation: students.geolocation,
            status: students.status
        });
        return student;
    } catch (err) {
        throw new Error("Can't create student");
    }
}

const UpdateStudents = async (students: StudentsInterface) => {
    try {
        const student = await TestStudents.update({
            first_name: students.first_name,
            last_name: students.last_name,
            lv_id: students.lv_id,
            group: students.group,
            email: students.email,
            phone_number: students.phone_number,
            geolocation: students.geolocation,
            status: students.status
        },{
            where: {
                s_id: students.s_id
            }
        });
        return student;
    } catch (err) {
        throw new Error("Can't update student");
    }
}

const DeleteStudents = async (id: number) => {
    try {
        const students = await TestStudents.destroy({
            where: {
                s_id: id
            }
        });
        return students;
    } catch (err) {
        console.log(err);
        throw new Error("Can't delete student");
    }
}



export { ListStudents, CreateStudents, UpdateStudents, DeleteStudents };
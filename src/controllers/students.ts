import { Request, Response } from 'express';
import { StudentsInterface } from '../class/students';
import { CreateStudents, DeleteStudents, ListStudents, UpdateStudents } from '../db/crud/students';

const ListStudent = async (_: Request, res: Response) => {
    try {
        const students = await ListStudents();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: students
        });
    } catch (err) {
        res.status(500).json({
            susses: false,
            err: err.message
        });
    }
}

const CreateStudent = async (req: Request, res: Response) => {
    try {

        const student: StudentsInterface = req.body;
        const newStudent = await CreateStudents(student);
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: newStudent
        });
    } catch (err) {
        res.status(500).json({
            susses: false,
            err: err.message
        });
    }
}

const UpdateStudent = async (Req: Request, res: Response) => {
    try {
        const student : StudentsInterface = Req.body;
        await UpdateStudents(student);
        res.status(200).json({
            susses: true,
            mgs: "Success Student Updated",
        });

    } catch (err) {
        res.status(500).json({
            susses: false,
            err: err.message
        });
    }
}

const DeleteStudent = async (Req: Request, res: Response) => {
    try {
        const { s_id } = Req.body;
        const student = await DeleteStudents(s_id);

        if (student === 0) {
            res.status(400).json({
                susses: false,
                mgs: "Student not found",
            });
            return;
        }

        if (student === 1) {
            res.status(200).json({
                susses: true,
                mgs: "Susses Student deleted",
            });
            return;
        }

    } catch (err) {
        res.status(500).json({
            susses: false,
            err: err.message
        });
    }
}




export {
    ListStudent,
    CreateStudent,
    UpdateStudent,
    DeleteStudent
}
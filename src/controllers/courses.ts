import { Request, Response } from "express";
import {
  CreateCurses,
  DeleteCurses,
  ListCurses,
  UpdateCurses,
} from "../db/crud/curses";

const ListCourses = async (_: Request, res: Response) => {
  try {
    const courses = await ListCurses();
    res.status(200).json({
      susses: true,
      mgs: "Success",
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      susses: false,
      mgs: err.message,
    });
  }
};

const CreateCourses = async (Req: Request, res: Response) => {
  try {
    const { name, credits } = Req.body;
    const courses = await CreateCurses({ name, credits });
    res.status(200).json({
      success: true,
      mgs: "Course created",
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      mgs: err.message,
    });
  }
};

const UpdateCourses = async (Req: Request, res: Response) => {
  try {
    const { c_id, name, credits } = Req.body;
    const newCourse = await UpdateCurses({ c_id: c_id, name, credits });

    if (newCourse[0] === 0) {
      res.status(400).json({
        success: false,
        mgs: "Course not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      mgs: "Success Course updated",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      mgs: err.message,
    });
  }
};

const DeleteCourses = async (Req: Request, res: Response) => {
  try {
    const { c_id } = Req.body;
    const courses = await DeleteCurses(c_id);

    if (courses === 0) {
      res.status(400).json({
        success: false,
        mgs: "Course not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      mgs: "Course deleted",
    });
  } catch (err) {
    res.status(500).json({
      estatus: 500,
      error: err.message,
    });
  }
};

export { ListCourses, CreateCourses, UpdateCourses, DeleteCourses };

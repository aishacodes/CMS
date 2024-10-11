import { Request, Response } from "express";
import { ICourse } from "../types/courses.types";
import { addCoursesToFile, getCousesFromFile } from "../utils/helpers";

export const getCourse = async (_req: Request, res: Response) => {
  const courses = await getCousesFromFile();

  res.status(200).json(courses);
};

export const getCourseById = async (req: Request, res: Response) => {
  const courseId = Number(req.params.id);

  const courses = await getCousesFromFile();
  const courseExist = courses.find((course: ICourse) => course.id === courseId);

  if (courseExist) {
    res.status(200).json(courseExist);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
};

export const addCourse = async (req: Request, res: Response) => {
  const course: ICourse = req.body;
  const courses = await getCousesFromFile();
  courses.push(course);
  await addCoursesToFile(courses);
  res.status(201).json({ message: "Course created succcessfully", course });
};

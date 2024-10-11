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
  const course = req.body;

  const courses = await getCousesFromFile();

  const maxId =
    courses.length > 0
      ? Math.max(...courses.map((n: ICourse) => Number(n.id)))
      : 0;

  const newCourseId = maxId + 1;

  courses.push({ id: newCourseId, ...course });
  await addCoursesToFile(courses);
  res.status(201).json({
    message: "Course created succcessfully",
    course: { id: newCourseId, ...course },
  });
};

export const deleteCourse = async (req: Request, res: Response) => {
  const courseId = req.params.id;
  let courses = await getCousesFromFile();
  courses = courses.filter((course: ICourse) => course.id !== Number(courseId));
  await addCoursesToFile(courses);

  res.status(204).end();
};

export const updateCourse = async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const courseToUpdate = req.body;

  const courses = await getCousesFromFile();
  const courseIndex = courses.findIndex(
    (course: ICourse) => course.id === Number(courseId)
  );

  if (courseIndex !== -1) {
    courses[courseIndex] = { ...courses[courseIndex], ...courseToUpdate };
    await addCoursesToFile(courses);
  }
  res.status(201).json({
    message: "Course updated succcessfully",
    course: { ...courses[courseIndex] },
  });
};

import { NextFunction, Request, Response } from "express";
import { ICourse } from "../types/courses.types";
import { addCoursesToFile, getCousesFromFile } from "../utils/helpers";

export const getCourses = async (_req: Request, res: Response) => {
  const courses = await getCousesFromFile();
  res.status(200).json(courses);
};

export const getCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseId = Number(req.params.id);

    if (isNaN(courseId)) {
      res.status(400).json({ message: "Invalid course ID" });
      return;
    }
    const courses = await getCousesFromFile();
    const courseExist = courses.find(
      (course: ICourse) => course.id === courseId
    );

    if (courseExist) {
      res.status(200).json(courseExist);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (err) {
    next(err);
  }
};

export const addCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseId = Number(req.params.id);
    let courses = await getCousesFromFile();
    const courseExist = courses.find(
      (course: ICourse) => course.id === courseId
    );
    if (courseExist) {
      courses = courses.filter((course: ICourse) => course.id !== courseId);
      await addCoursesToFile(courses);

      res.status(204).end();
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseId = req.params.id;
    const courseToUpdate = req.body;

    const courses = await getCousesFromFile();
    const courseIndex = courses.findIndex(
      (course: ICourse) => course.id === Number(courseId)
    );

    if (courseIndex !== -1) {
      courses[courseIndex] = { ...courses[courseIndex], ...courseToUpdate };
      await addCoursesToFile(courses);

      res.status(200).json({
        message: "Course updated succcessfully",
        course: { ...courses[courseIndex] },
      });
    } else {
      res.status(404).json({
        message: "Course not found",
      });
    }
  } catch (err) {
    next(err);
  }
};

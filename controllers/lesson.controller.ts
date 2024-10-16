import { NextFunction, Request, Response } from "express";
import { ILesson } from "../types/courses.types";
import { addLessonsToFile, getLessonsFromFile } from "../utils/helpers";

export const getLesson = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lessons = await getLessonsFromFile();
    res.status(200).json(lessons);
  } catch (error) {
    next(error);
  }
};

export const getLessonById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lessonId = Number(req.params.id);

    if (isNaN(lessonId)) {
      res.status(400).json({ message: "Invalid lesson ID" });
      return;
    }

    const lessons = await getLessonsFromFile();
    const lessonExist = lessons.find(
      (lesson: ILesson) => lesson.id === lessonId
    );

    if (lessonExist) {
      res.status(200).json(lessonExist);
    } else {
      res.status(404).json({ message: "Lesson not found" });
    }
  } catch (err) {
    next(err);
  }
};

export const addLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lesson = req.body;
    const lessons = await getLessonsFromFile();

    const maxId =
      lessons.length > 0
        ? Math.max(...lessons.map((n: ILesson) => Number(n.id)))
        : 0;

    const newLessonId = maxId + 1;

    lessons.push({ id: newLessonId, ...lesson });
    await addLessonsToFile(lessons);
    res.status(201).json({
      message: "Lesson created succcessfully",
      lesson: { id: newLessonId, ...lesson },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lessonId = req.params.id;
    let lessons = await getLessonsFromFile();
    lessons = lessons.filter(
      (lesson: ILesson) => lesson.id !== Number(lessonId)
    );
    await addLessonsToFile(lessons);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const updateLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lessonId = req.params.id;
    const lessonToUpdate = req.body;

    const lessons = await getLessonsFromFile();
    const lessonIndex = lessons.findIndex(
      (lesson: ILesson) => lesson.id === Number(lessonId)
    );

    if (lessonIndex !== -1) {
      lessons[lessonIndex] = { ...lessons[lessonIndex], ...lessonToUpdate };
      await addLessonsToFile(lessons);
    }
    res.status(200).json({
      message: "Lesson updated succcessfully",
      lesson: { ...lessons[lessonIndex] },
    });
  } catch (error) {
    next(error);
  }
};

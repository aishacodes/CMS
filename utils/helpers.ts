import { readFile, writeFile } from "fs-extra";
import { ICourse, ILesson, IModule } from "../types/courses.types";

const COURSE_FILE = "./data/courses.json";

export const getCousesFromFile = async () => {
  const courses = await readFile(COURSE_FILE, "utf-8");
  return JSON.parse(courses);
};

export const addCoursesToFile = async (course: ICourse[]) => {
  await writeFile(COURSE_FILE, JSON.stringify(course, null, 2));
};

const MODULE_FILE = "./data/modules.json";

export const getModulesFromFile = async () => {
  const modules = await readFile(MODULE_FILE, "utf-8");
  return JSON.parse(modules);
};

export const addModulesToFile = async (module: IModule[]) => {
  await writeFile(MODULE_FILE, JSON.stringify(module, null, 2));
};

const LESSON_FILE = "./data/lessons.json";

export const getLessonsFromFile = async () => {
  const lessons = await readFile(LESSON_FILE, "utf-8");
  return JSON.parse(lessons);
};

export const addLessonsToFile = async (lessons: ILesson[]) => {
  await writeFile(LESSON_FILE, JSON.stringify(lessons, null, 2));
};

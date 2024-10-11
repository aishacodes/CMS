import { readFile, writeFile } from "fs-extra";
import { ICourse } from "../types/courses.types";

const COURSE_FILE = "./data/courses.json";

export const getCousesFromFile = async () => {
  const courses = await readFile(COURSE_FILE, "utf-8");
  return JSON.parse(courses);
};

export const addCoursesToFile = async (course: ICourse[]) => {
  await writeFile(COURSE_FILE, JSON.stringify(course, null, 2));
};

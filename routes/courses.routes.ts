import { Router } from "express";
import {
  addCourse,
  deleteCourse,
  getCourses,
  getCourseById,
  updateCourse,
} from "../controllers/courses.controller";
import { courseSchema, editCourseSchema } from "../validators/course.validator";
import { validator } from "../middlewares/validator";

const router = Router();

router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.post("/courses", validator(courseSchema), addCourse);
router.delete("/courses/:id", deleteCourse);
router.patch("/courses/:id", validator(editCourseSchema), updateCourse);

export default router;

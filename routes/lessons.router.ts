import { Router } from "express";
import {
  addLesson,
  deleteLesson,
  getLesson,
  getLessonById,
  updateLesson,
} from "../controllers/lesson.controller";
import { validator } from "../middlewares/validator";
import { editLessonSchema, lessonSchema } from "../validators/course.validator";

const router = Router();

router.get("/lessons", getLesson);
router.get("/lessons/:id", getLessonById);
router.post("/lessons", validator(lessonSchema), addLesson);
router.delete("/lessons/:id", deleteLesson);
router.patch("/lessons/:id", validator(editLessonSchema), updateLesson);

export default router;

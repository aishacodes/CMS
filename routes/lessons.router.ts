import { Router } from "express";
import {
  addLesson,
  deleteLesson,
  getLesson,
  getLessonById,
  updateLesson,
} from "../controllers/lesson.controller";

const router = Router();

router.get("/lessons", getLesson);
router.get("/lessons/:id", getLessonById);
router.post("/lessons", addLesson);
router.delete("/lessons/:id", deleteLesson);
router.patch("/lessons/:id", updateLesson);

export default router;

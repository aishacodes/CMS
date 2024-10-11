import { Router } from "express";
import {
  addCourse,
  getCourse,
  getCourseById,
} from "../controllers/courses.controller";

const router = Router();

router.get("/courses", getCourse);
router.get("/courses/:id", getCourseById);
router.post("/courses", addCourse);

export default router;

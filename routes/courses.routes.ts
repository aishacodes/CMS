import { Router } from "express";
import {
  addCourse,
  deleteCourse,
  getCourse,
  getCourseById,
  updateCourse,
} from "../controllers/courses.controller";

const router = Router();

router.get("/courses", getCourse);
router.get("/courses/:id", getCourseById);
router.post("/courses", addCourse);
router.delete("/courses/:id", deleteCourse);
router.patch("/courses/:id", updateCourse);

export default router;

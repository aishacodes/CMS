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

/**
 * @swagger
 * tags:
 *   name: Lessons
 *   description: API for managing lessons
 */

/**
 * @swagger
 * /lessons:
 *   get:
 *     summary: Get all lessons
 *     tags: [Lessons]
 *     responses:
 *       200:
 *         description: List of lessons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lesson'
 */
router.get("/", getLesson);

/**
 * @swagger
 * /lessons/{id}:
 *   get:
 *     summary: Get a lesson by ID
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the lesson
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single lesson
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 *       404:
 *         description: Lesson not found
 */
router.get("/:id", getLessonById);

/**
 * @swagger
 * /lessons:
 *   post:
 *     summary: Create a new lesson
 *     tags: [Lessons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lesson'
 *     responses:
 *       201:
 *         description: Lesson created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 *       400:
 *         description: Bad request
 */
router.post("/", validator(lessonSchema), addLesson);

/**
 * @swagger
 * /lessons/{id}:
 *   patch:
 *     summary: Update a lesson by ID
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the lesson
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lesson'
 *     responses:
 *       200:
 *         description: Lesson updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 *       404:
 *         description: Lesson not found
 */
router.patch("/:id", validator(editLessonSchema), updateLesson);

/**
 * @swagger
 * /lessons/{id}:
 *   delete:
 *     summary: Delete a lesson by ID
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the lesson
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson deleted successfully
 *       404:
 *         description: Lesson not found
 */
router.delete("/:id", deleteLesson);

export default router;

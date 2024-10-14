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

/**
 * @swagger
 * tags:
 *   name: Courses-controller
 *   description: API for managing courses
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses-controller]
 *     responses:
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
router.get("/", getCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses-controller]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the course
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 */
router.get("/:id", getCourseById);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses-controller]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Bad request
 */
router.post("/", validator(courseSchema), addCourse);

/**
 * @swagger
 * /courses/{id}:
 *   patch:
 *     summary: Update a course by ID
 *     tags: [Courses-controller]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the course
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 */
router.patch("/:id", validator(editCourseSchema), updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags: [Courses-controller]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the course
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 */
router.delete("/:id", deleteCourse);

export default router;

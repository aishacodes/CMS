import { Router } from "express";
import {
  addModule,
  deleteModule,
  getModule,
  getModuleById,
  updateModule,
} from "../controllers/module.controller";
import { editModuleSchema, moduleSchema } from "../validators/course.validator";
import { validator } from "../middlewares/validator";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Modules
 *   description: API for managing course modules
 */

/**
 * @swagger
 * /modules:
 *   get:
 *     summary: Get all modules
 *     tags: [Modules]
 *     responses:
 *       200:
 *         description: List of modules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Module'
 */
router.get("/", getModule);

/**
 * @swagger
 * /modules/{id}:
 *   get:
 *     summary: Get a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the module
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A module object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Module not found
 */
router.get("/:id", getModuleById);

/**
 * @swagger
 * /modules:
 *   post:
 *     summary: Create a new module
 *     tags: [Modules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       201:
 *         description: Module created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       400:
 *         description: Bad request
 */
router.post("/", validator(moduleSchema), addModule);

/**
 * @swagger
 * /modules/{id}:
 *   patch:
 *     summary: Update a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the module
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: Module updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Module not found
 */
router.patch("/:id", validator(editModuleSchema), updateModule);

/**
 * @swagger
 * /modules/{id}:
 *   delete:
 *     summary: Delete a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the module
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Module deleted successfully
 *       404:
 *         description: Module not found
 */
router.delete("/:id", deleteModule);

export default router;

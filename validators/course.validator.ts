import Joi from "joi";

const contentSchema = Joi.object({
  type: Joi.string().valid("text", "video", "audio").required(),
  data: Joi.string().required(),
});

export const lessonSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  topics: Joi.array().items(Joi.string()).required(),
  content: Joi.array().items(contentSchema).required(),
});
export const editLessonSchema = Joi.object({
  id: Joi.number().integer().positive(),
  title: Joi.string(),
  description: Joi.string(),
  topics: Joi.array().items(Joi.string()),
  content: Joi.array().items(contentSchema),
});
export const moduleSchema = Joi.object({
  title: Joi.string().required(),
  lessons: Joi.array().items(lessonSchema).required(),
});

export const editModuleSchema = Joi.object({
  id: Joi.number().integer().positive(),
  title: Joi.string(),
  lessons: Joi.array().items(lessonSchema),
});

export const courseSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  modules: Joi.array().items(moduleSchema).required(),
});

export const editCourseSchema = Joi.object({
  id: Joi.number().integer().positive(),
  title: Joi.string(),
  description: Joi.string(),
  modules: Joi.array().items(moduleSchema),
});

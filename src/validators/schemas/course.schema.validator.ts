import * as Joi from "joi";

const createCourseSchema = Joi.object({
  name: Joi.string().max(100).required(),
  credits: Joi.number().required(),
});

const updateCourseSchema = Joi.object({
  c_id: Joi.number().required(),
  name: Joi.string().max(100).required(),
  credits: Joi.number().required(),
});

const deleteCourseSchema = Joi.object({
  c_id: Joi.number().required(),
});

export { createCourseSchema, updateCourseSchema, deleteCourseSchema };

import * as Joi from "Joi";

const createStudentSchema = Joi.object({
  first_name: Joi.string().max(50).required(),
  last_name: Joi.string().max(50).required(),
  lv_id: Joi.number().required(),
  group: Joi.string().max(5).required(),
  email: Joi.string().max(100).required(),
  phone_number: Joi.string().max(100).required(),
  geolocation: Joi.string().max(200).required(),
  status: Joi.number().min(0).max(1).required(),
});

const updateStudentSchema = Joi.object({
  s_id: Joi.number().required(),
  first_name: Joi.string().max(50).required(),
  last_name: Joi.string().max(50).required(),
  lv_id: Joi.number().required(),
  group: Joi.string().max(5).required(),
  email: Joi.string().max(100).required(),
  phone_number: Joi.string().max(100).required(),
  geolocation: Joi.string().max(200).required(),
  status: Joi.number().min(0).max(1).required(),
});

const deleteStudentSchema = Joi.object({
  s_id: Joi.number().required(),
});

export { createStudentSchema, updateStudentSchema, deleteStudentSchema };

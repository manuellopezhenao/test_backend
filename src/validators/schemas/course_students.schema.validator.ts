import * as Joi from "joi";

const createCourseStudentSchema = Joi.object({
  s_id: Joi.number().required(),
  c_id: Joi.number().required(),
});

const deleteCourseStudentSchema = Joi.object({
  cxs_id: Joi.number().optional(),

  c_id: Joi.number().when("cxs_id", {
    is: Joi.exist(),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  s_id: Joi.number().when("cxs_id", {
    is: Joi.exist(),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  
});



export { createCourseStudentSchema, deleteCourseStudentSchema };

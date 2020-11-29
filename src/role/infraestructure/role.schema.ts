import Joi from "joi";

export const schemas = {
  POST_INSERT: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },
  UPDATE: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      name: Joi.string(),
    }),
  },
  GET_ONE: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  DELETE: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  PAGINATION: {
    params: Joi.object({
      page: Joi.number().required(),
    }),
  },
};

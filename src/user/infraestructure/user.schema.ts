import Joi from 'joi';

export const schemas = {
	POST_INSERT: {
		body: Joi.object({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().required(),
			roles: Joi.array().required(),
			photo: Joi.string(),
		}),
	},
	UPDATE: {
		params: Joi.object({
			id: Joi.string().required(),
		}),
		body: Joi.object({
			name: Joi.string(),
			email: Joi.string().email(),
			password: Joi.string(),
			roles: Joi.array(),
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

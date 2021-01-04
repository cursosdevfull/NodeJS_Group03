import Joi from 'joi';

export const schemas = {
	POST_INSERT: {
		body: Joi.object({
			name: Joi.string().required(),
			surname: Joi.string().required(),
			lastname: Joi.string().required(),
			cmp: Joi.string().required(),
			dni: Joi.string().required(),
			photo: Joi.string().required(),
			email: Joi.string().email().required(),
		}),
	},
	UPDATE: {
		params: Joi.object({
			id: Joi.string().required(),
		}),
		body: Joi.object({
			name: Joi.string(),
			surname: Joi.string(),
			lastname: Joi.string(),
			cmp: Joi.string(),
			dni: Joi.string(),
			photo: Joi.string(),
			email: Joi.string().email(),
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

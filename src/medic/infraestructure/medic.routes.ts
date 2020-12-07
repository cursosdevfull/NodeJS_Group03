import express from 'express';
import { MedicOperation } from './medic.operation';
import { MedicUseCase } from '../application/medic.usecase';
import { MedicController } from './medic.controller';
import { Medic } from '../domain/entities/medic.entity';
import SchemaValidator from '../../validators/schema.validator';
import { schemas as MedicSchema } from './medic.schema';
import { Errors } from '../../helpers/errors.helper';

const medicOperation = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);
const medicController = new MedicController(medicUseCase);

const router = express.Router();

router.get(
	'/',
	Errors.asyncError(async (req, res) => {
		const result = await medicController.getAll(true);
		res.json(result);
	})
);

router.get(
	'/:id',
	SchemaValidator.validate(MedicSchema.GET_ONE),
	Errors.asyncError(async (req, res) => {
		const id = req.params.id;
		const result = await medicController.getOne(id);
		res.json(result);
	})
);

router.get(
	'/page/:page',
	SchemaValidator.validate(MedicSchema.PAGINATION),
	Errors.asyncError(async (req, res) => {
		const page = +req.params.page;
		const results = await medicController.getByPage(page);
		res.json({ status: 200, results });
	})
);

router.post(
	'/',
	SchemaValidator.validate(MedicSchema.POST_INSERT),
	Errors.asyncError(async (req, res) => {
		const {
			name,
			surname,
			lastname,
			cmp,
			dni,
			email,
			photo,
			locations,
		} = req.body;

		const medic: Medic = {
			name,
			surname,
			lastname,
			cmp,
			dni,
			email,
			photo,
			locations,
			isActive: true,
		};
		const result = await medicController.insert(medic);
		res.json(result);
	})
);

router.put(
	'/:id',
	SchemaValidator.validate(MedicSchema.UPDATE),
	Errors.asyncError(async (req, res) => {
		const medic: Medic = req.body;
		const id = req.params.id;
		const result = await medicController.update(id, medic);
		res.json(result);
	})
);

router.delete(
	'/:id',
	SchemaValidator.validate(MedicSchema.DELETE),
	Errors.asyncError(async (req, res) => {
		const id = req.params.id;
		const result = await medicController.delete(id);
		res.json(result);
	})
);

export { router };

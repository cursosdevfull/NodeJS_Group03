import express from 'express';
import { RoleOperation } from './role.operation';
import { RoleController } from './role.controller';
import SchemaValidator from '../../validators/schema.validator';
import { schemas as RoleSchema } from './role.schema';
import { Errors } from '../../helpers/errors.helper';
import { RoleUseCase } from '../application/role.usecase';
import { Role } from '../../entities/role.model';

const roleOperation = new RoleOperation();
const roleUseCase = new RoleUseCase(roleOperation);
const roleController = new RoleController(roleUseCase);

const router = express.Router();

router.get(
	'/',
	Errors.asyncError(async (req, res) => {
		const result = await roleController.getAll(true);
		res.json(result);
	})
);

router.get(
	'/:id',
	SchemaValidator.validate(RoleSchema.GET_ONE),
	Errors.asyncError(async (req, res) => {
		const id = +req.params.id;
		const result = await roleController.getOne(id);
		res.json(result);
	})
);

router.get(
	'/page/:page',
	SchemaValidator.validate(RoleSchema.PAGINATION),
	Errors.asyncError(async (req, res) => {
		const page = +req.params.page;
		const results = await roleController.getByPage(page);
		res.json({ status: 200, results });
	})
);

router.post(
	'/',
	SchemaValidator.validate(RoleSchema.POST_INSERT),
	Errors.asyncError(async (req, res) => {
		const { name } = req.body;
		const role: Partial<Role> = {
			name,
			isActive: true,
		};
		const result = await roleController.insert(role);
		res.json(result);
	})
);

router.put(
	'/:id',
	SchemaValidator.validate(RoleSchema.UPDATE),
	Errors.asyncError(async (req, res) => {
		const role: Role = req.body;
		const id = +req.params.id;
		const result = await roleController.update(id, role);
		res.json(result);
	})
);

router.delete(
	'/:id',
	SchemaValidator.validate(RoleSchema.DELETE),
	Errors.asyncError(async (req, res) => {
		const id = +req.params.id;
		const result = await roleController.delete(id);
		res.json(result);
	})
);

export { router };

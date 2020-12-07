import express from 'express';
import { UserOperation } from './user.operation';
import { UserController } from './user.controller';
import { User } from '../domain/entities/user.entity';
import SchemaValidator from '../../validators/schema.validator';
import { schemas as UserSchema } from './user.schema';
import { Errors } from '../../helpers/errors.helper';
import { UserUseCase } from '../application/user.usercase';
import { AuthenticationGuard } from '../../guards/authentication.guard';
import { AuthorizationGuard } from '../../guards/authorization.guard';
import { Upload } from '../../middlewares/upload.middleware';

const userOperation = new UserOperation();
const userUseCase = new UserUseCase(userOperation);
const userController = new UserController(userUseCase);

const router = express.Router();

router.get(
	'/',
	AuthenticationGuard.canActivate,
	AuthorizationGuard.canActivate('ADMIN'),
	Errors.asyncError(async (req, res) => {
		const result = await userController.getAll(true);
		res.json(result);
	})
);

router.get(
	'/:id',
	AuthenticationGuard.canActivate,
	AuthorizationGuard.canActivate('ADMIN'),
	SchemaValidator.validate(UserSchema.GET_ONE),
	Errors.asyncError(async (req, res) => {
		const id = req.params.id;
		const result = await userController.getOne(id);
		res.json(result);
	})
);

router.get(
	'/page/:page',
	AuthenticationGuard.canActivate,
	AuthorizationGuard.canActivate('ADMIN'),
	SchemaValidator.validate(UserSchema.PAGINATION),
	Errors.asyncError(async (req, res) => {
		const page = +req.params.page;
		const results = await userController.getByPage(page);
		res.json({ status: 200, results });
	})
);

router.post(
	'/',
	AuthenticationGuard.canActivate,
	AuthorizationGuard.canActivate('ADMIN'),
	Upload.S3('photo'),
	SchemaValidator.validate(UserSchema.POST_INSERT),
	Errors.asyncError(async (req, res) => {
		console.log(req.body);
		const { name, email, password, roles, photo } = req.body;
		const user: User = {
			name,
			email,
			password,
			roles,
			photo,
			isActive: true,
		};
		const result = await userController.insert(user);
		res.json(result);
	})
);

router.put(
	'/:id',
	AuthenticationGuard.canActivate,
	AuthorizationGuard.canActivate('ADMIN'),
	SchemaValidator.validate(UserSchema.UPDATE),
	Errors.asyncError(async (req, res) => {
		const medic: User = req.body;
		const id = req.params.id;
		const result = await userController.update(id, medic);
		res.json(result);
	})
);

router.delete(
	'/:id',
	AuthenticationGuard.canActivate,
	AuthorizationGuard.canActivate('ADMIN'),
	SchemaValidator.validate(UserSchema.DELETE),
	Errors.asyncError(async (req, res) => {
		const id = req.params.id;
		const result = await userController.delete(id);
		res.json(result);
	})
);

export { router };

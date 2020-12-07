import express from 'express';
import { Errors } from '../../helpers/errors.helper';
import { User } from '../../user/domain/entities/user.entity';
import SchemaValidator from '../../validators/schema.validator';
import { AuthUseCase } from '../application/auth.usecase';
import { AuthController } from './auth.controller';
import { AuthOperation } from './auth.operation';
import { schemas as AuthSchema } from './auth.schema';

const authOperation = new AuthOperation();
const authUseCase = new AuthUseCase(authOperation);
const authController = new AuthController(authUseCase);

const router = express.Router();

router.post(
	'/',
	SchemaValidator.validate(AuthSchema.LOGIN),
	Errors.asyncError(async (req, res) => {
		const { email, password } = req.body;
		const user: User = {
			email,
			password,
		};
		const result = await authController.login(user);

		if (result) {
			return res.json(result);
		}
		res.status(404).send('User not found');
	})
);

export { router };

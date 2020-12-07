import { Request, Response, NextFunction } from 'express';
import { IError } from '../helpers/errors.helper';

export default class SchemaValidator {
	static generateError(objError: {
		name: string;
		status: number;
		message: string;
		stack: string;
		next: NextFunction;
	}) {
		const err: IError = new Error(objError.name);
		err.status = objError.status;
		err.message = objError.message;
		err.stack = objError.stack;
		objError.next(err);
	}

	static validate(schemaValidation: any) {
		return (req: Request, res: Response, next: NextFunction): Promise<any> => {
			const listContainersParameters = ['headers', 'body', 'params', 'query'];
			const listValidations: Array<Promise<any>> = [];

			listContainersParameters.forEach((container: string) => {
				if (schemaValidation[container]) {
					switch (container) {
						case 'body':
							listValidations.push(
								schemaValidation[container].validate(req.body)
							);
							break;
						case 'params':
							listValidations.push(
								schemaValidation[container].validate(req.params)
							);
							break;
						case 'query':
							listValidations.push(
								schemaValidation[container].validate(req.query)
							);
							break;
						case 'headers':
							listValidations.push(
								schemaValidation[container].validate(req.headers)
							);
							break;
					}
				}
			});

			return Promise.all(listValidations).then(
				results => {
					let hasError = false;
					results.forEach(result => {
						if (result.error && !hasError) {
							hasError = true;
							SchemaValidator.generateError({
								name: 'Parameters Error',
								message: 'Error in parameters',
								status: 411,
								stack: result.error,
								next,
							});
							// res.status(411).json({ status: 411, result: result.error });
						}
					});
					if (!hasError) {
						next();
					}
				},
				err => {
					SchemaValidator.generateError({
						name: 'Parameters Error',
						message: 'Error in parameters',
						status: 411,
						stack: err.error,
						next,
					});
				}
			);
		};
	}
}

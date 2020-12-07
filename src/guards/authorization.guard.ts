import { Request, Response, NextFunction } from 'express';

export class AuthorizationGuard {
	static canActivate(...rolesAllowed: Array<string>) {
		return (req: Request, res: Response, next: NextFunction) => {
			const { roles } = res.locals.payload;

			// canActivate("ADMIN", "AUDITOR")

			let roleMatched = false;

			roles.forEach((role: { [s: string]: string }) => {
				if (rolesAllowed.indexOf(role.name) > -1) {
					roleMatched = true;
					next();
				}
			});

			if (!roleMatched) {
				res.status(409).send('User not authorized');
			}
		};
	}
}

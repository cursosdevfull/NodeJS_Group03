import express from 'express';
import { Errors } from './helpers/errors.helper';
import { router as RouterMedic } from './medic/infraestructure/medic.routes';
import { router as RouterUser } from './user/infraestructure/user.routes';
import { router as RouterRole } from './role/infraestructure/role.routes';
import { router as RouterAuth } from './auth/infraestructure/auth.routes';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
multer();
/* app.use(express.json());
app.use(express.urlencoded({ extended: true })); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/medics', RouterMedic);
app.use('/users', RouterUser);
app.use('/roles', RouterRole);
app.use('/auth', RouterAuth);

app.use(Errors.pathNotFoundError);

app.use(Errors.genericError);

export default app;

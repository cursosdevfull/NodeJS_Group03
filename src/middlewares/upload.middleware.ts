import multer from 'multer';
import multer_s3 from 'multer-s3';
import AWS from 'aws-sdk';
import yenv from 'yenv';
import { IError } from '../helpers/errors.helper';

const env = yenv();

AWS.config.update({ region: 'us-east-2' });

const s3 = new AWS.S3({
	accessKeyId: 'AKIAUDXASLVFBDYMGUOQ',
	secretAccessKey: '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',
});

export class Upload {
	static S3(fieldName: string) {
		return multer({
			storage: multer_s3({
				s3: s3,
				bucket: env.AWS.S3.BUCKET_NAME,
				acl: 'public-read',
				metadata(req, file, cb) {
					cb(null, { fieldName: file.fieldname });
				},
				key(req: any, file, cb) {
					const partsFile = file.originalname.split('.');

					if (!file.mimetype.startsWith('image/')) {
						const error: IError = new Error('It is not a image');
						error.status = 500;
						cb(error);
					} else if (partsFile.length === 1) {
						const error: IError = new Error('Image without extension');
						error.status = 500;
						cb(error);
					} else {
						const extension = partsFile[1];
						const name = Date.now().toString();
						const newFileName = name + '.' + extension;
						req.body.photo = newFileName;
						cb(null, file.originalname);
					}
				},
			}),
		}).single(fieldName);
	}
}

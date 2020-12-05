/* import multer from "multer";
import multer_s3 from "multer-s3";
import AWS from "aws-sdk";
import yenv from "yenv";

const env = yenv();

AWS.config.update({ region: "us-east-2" });

const s3 = new AWS.S3({
  accessKeyId: "AKIAUDXASLVFOEHFXOUD",
  secretAccessKey: "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",
});

export class Upload {
  static S3(fieldName: string) {
    return multer({
      storage: multer_s3({
        s3: s3,
        bucket: env.AWS.S3.BUCKET_NAME,
        acl: "public-read",
        metadata: function (req, file, cb) {
          console.log(req.files);
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, Date.now().toString());
        },
      }),
    }).single(fieldName);
  }
}
 */

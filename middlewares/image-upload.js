const multer = require('multer')
const uuid = require('uuid').v4
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')

const upload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: 'myonlineshop0',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, uuid() + '-' + file.originalname)
    }
  })
})

const configuredMulterMiddleware = upload.single('image')

module.exports = configuredMulterMiddleware

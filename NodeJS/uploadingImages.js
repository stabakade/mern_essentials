const multer = require('multer');

// we create a storage using multer.diskStorage() where our images will be stored

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  // destination is a property: the path where the images will be stored.
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {   // finename is a property: determines the name that would be saved in storage
        cb(null, file.originalname);
    }
});

// this is how we upload
const uploadImg = multer({storage: storage}).single('image');

// and final router code can be 
router.post('/tea', teaController.uploadImg , teaController.newTea);
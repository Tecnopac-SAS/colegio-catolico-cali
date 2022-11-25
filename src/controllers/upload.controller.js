const multer  = require('multer')
const path = require('path')
const md5 = require('md5')


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req,file,cb) => {
        const ext = path.extname(file.originalname); 
        const fileName = md5(`${new Date().toString()}${file.originalname}`);
        cb(null,`${fileName}${ext}`);
    }
});

const upload =  multer({ 
    storage,
    dest: path.join(__dirname,'../uploads'),
    limits: {fileSize: 10000000},
    fileFilter: (req, file, cb)=>{
        const filetypes = /jpeg|jpg|png|gif|JPEG|JPG|PNG|GIF/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }else{
            cb("Archivo debe ser una imagen valida");
        }
    }
});

module.exports= upload
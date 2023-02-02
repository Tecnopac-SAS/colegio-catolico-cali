const path = require('path');
const RandomHelper = require('./random');
const fs = require('fs');
// request = require('request');
const https = require('https');


const storeFile = (file, prefix = "") => {
    if (file === undefined) return false;
    const fileName = RandomHelper.makeUniq(15) + path.extname(file.name);
    const pathImg = path.join(__dirname, '../') + `/uploads/${prefix}${fileName}`;
    file.mv(pathImg);
    return `/${prefix}${fileName}`;
}
// const downloadFile = function(uri, filename, callback){
//     request.head(uri, function(err, res, body){
//       console.log('content-type:', res.headers['content-type']);
//       console.log('content-length:', res.headers['content-length']);
  
//       request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//     });
//   };
const downloadFile = function(url){
    /* return new Promise((resolve, reject) => {
        const filePath = `lena.png`;
        url = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png'
        
      
        res.pipe(fs.createWriteStream(filePath))
            .on('error', reject)
            .once('close', () => resolve(filePath));
        // Consume response data to free up memory
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
    }); */

};

module.exports = {
    storeFile,
    downloadFile,
}

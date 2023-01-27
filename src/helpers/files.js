const path = require('path');
const RandomHelper = require('./random');


const storeFile = (file, prefix = "") => {
    if (file === undefined) return false;
    const fileName = RandomHelper.makeUniq(15) + path.extname(file.name);
    const pathImg = path.join(__dirname, '../') + `/uploads/${prefix}${fileName}`;
    file.mv(pathImg);
    return `/${prefix}${fileName}`;
}

module.exports = {
    storeFile,
}

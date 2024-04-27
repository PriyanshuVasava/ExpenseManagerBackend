const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = (pass) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(pass, salt);
    return hashedPassword;
}

const comparePassword = (pass, hashedPass) => {
    const flag = bcrypt.compareSync(pass, hashedPass);
    return flag;
}

module.exports = {
    encryptPassword,
    comparePassword
}
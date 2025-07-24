const jwtConfig = require('../config/jwtConfig');


const cookieConfig = {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
}

module.exports = cookieConfig
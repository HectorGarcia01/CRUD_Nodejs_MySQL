require('dotenv').config({ path: `.dev.env` })

module.exports = {
    HOST:           process.env.HOST,
    USER:           process.env.USER,
    PASSWORD:       process.env.PASSWORD,
    PORT:           process.env.PORT,
    DATABASE:       process.env.DATABASE
}

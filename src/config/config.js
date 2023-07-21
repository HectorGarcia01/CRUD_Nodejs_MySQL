require('dotenv').config({ path: `.dev.env` })

module.exports = {
    HOST:           process.env.HOST,
    USER:           process.env.USER,
    PASSWORD:       process.env.PASSWORD,
    PORTMYSQL:      process.env.PORTMYSQL,
    DATABASE:       process.env.DATABASE
}

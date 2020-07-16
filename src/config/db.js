const {Pool} = require("pg")

module.exports = new Pool({
    user:'postgres',
    password: "capota",
    host: "localhost",
    port: 5432,
    database:"myTeacher"
})
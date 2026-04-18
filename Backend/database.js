const sqlite3 = require("sqlite3")
const {open} = require("sqlite")

async function criarBanco(){

    const db = await open({
        filename:"./database.db",
        driver:sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS abrigos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            vagas INTEGER
            )
        `)
return db
}

module.exports = {criarBanco}

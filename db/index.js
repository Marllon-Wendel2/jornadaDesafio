import { MongoClient } from "mongodb";
import "dotenv/config.js"

const uri = process.env.DB_STRING
const client = new MongoClient(uri)

let clientesDepoimentos;

try {
  await client.connect()
  console.log("banco conectado com sucesso")

  const db = client.db('jornada_db')
  clientesDepoimentos = db.collection('depoimentos')

    } catch (erro) {
        console.log("Nao foi estabelecida a conexao")
}

export { clientesDepoimentos}
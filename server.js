import express from 'express'
import routerDepoimento from './routers/depoimentosRouter.js'
import routerDepoimentoRandom from './routers/depoimentosRandom.js'
import './db/index.js'
import cors from "cors"

const port = 3000
const app = express()

app.use(cors({
    origin: "*"
}))


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/depoimentos', routerDepoimento)
app.use('/depoimentos-home', routerDepoimentoRandom)

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})

export {
    app
}

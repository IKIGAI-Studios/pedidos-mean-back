import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pedidoRouter from './routes/pedido.routes.js'
import { connect } from './db/connection.js'

dotenv.config()

await connect()

const PORT = 3000 ?? process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Ver documentación de uso: https://github.com/IKIGAI-Studios/pedidos-mean-back/blob/master/api-guide.md')
})

app.use('/api/pedidos', pedidoRouter)

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:'+PORT)
})
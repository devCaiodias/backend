import express from 'express';
import cors from 'cors';
import clientsRoutes from './src/router/clientsRouter.js'

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.use('/api', clientsRoutes)

app.listen(port, () => {
    console.log(`Esse backend está rodando na porta: ${port}`)
})
import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing perpas
app.get('/', (req: Request, res: Response) => {
  res.send('Successfully Err Done By Me Nazrul Islam Rongon Das add')
})

export default app

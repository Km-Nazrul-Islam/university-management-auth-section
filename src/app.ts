import cors from 'cors'
import express, { Application } from 'express'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing perpas
app.get('/', (req: Requests, res: any) => {
  res.send('Working Successfully')
})

export default app

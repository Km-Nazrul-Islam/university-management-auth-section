import cors from 'cors'
import express, { Application, Request } from 'expresss'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing perpas
app.get('/', (req: Request, res: any) => {
  res.send('Successfully done')
})

export default app

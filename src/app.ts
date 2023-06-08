import cors from "cors"
import express, { Application, Request, Response } from "express"

const app: Application = express()
const port: number = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing perpas
app.get("/", (req: Request, res: Response) => {
  res.send("Working Successfully")
})

export default app

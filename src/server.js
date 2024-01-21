import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.disable('x-powered-by')
app.use(express.static(process.cwd() + '/src/view'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/src/view/index.html')
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

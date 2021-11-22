import { products } from '../cypress/component/fixtures/index.mjs'

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

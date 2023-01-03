import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'

const app = express()
const PORT = 5500

// initialize body-parser middleware
app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    console.log('[TEST]')
    res.send('Hello from Homepage')
})


app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`)
})
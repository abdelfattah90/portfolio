import express from 'express'
import dotenv from 'dotenv'
import router from './routes/routes.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

// VIEWS
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./public'))

// ROUETS
app.use(router)
app.listen(PORT, console.log('SERVER RUNNING...'))

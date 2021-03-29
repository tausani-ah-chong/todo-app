const express = require('express')
const app = express()

module.export = app

const todoRoutes = require('./routes')

app.use('/api/v1', todoRoutes)

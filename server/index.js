const express = require('express')
const server = express()

const mysql = require('mysql')

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'todoList'
})

server.use(express.json())

const port = process.env.PORT || 5000

server.post('/create', (req, res) => {
  const todoText = req.body.text
  db.query(
    "INSERT INTO todos (text) VALUES (?)",
    [todoText],
    (err, result) => {
      if (err) {
        console.log("aint working bruh", err)
      } else {
        res.send('Values Inserted!')
        console.log(result)
      }
    }
  )
})

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})

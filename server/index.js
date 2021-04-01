const express = require('express')
const server = express()

const port = process.env.PORT || 5000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})

server.use(express.json())

const apiRoute = "/api/v1"

const mysql = require('mysql')

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'todoList'
})

server.post(apiRoute, (req, res) => {
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

server.get(apiRoute, (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log("Success!");
    }
  })
})

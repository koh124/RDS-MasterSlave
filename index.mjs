// サーバーを起動する

import axios from 'axios'
import express from "express"
import mysql from 'mysql2/promise'

const app = express()

// JSONボディをexpressが解析できるようにする
app.use(express.json())

const PORT = 8080

const router = express.Router()

const dbConfig = {
  host: 'coda-rdsinstance-0ctu8bvekcyb.cgxjc4edrlzc.ap-northeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'coda',
}

router.get('/', async (req, res, next) => {
  try {
    let connection = await mysql.createConnection(dbConfig)
    const [rows] = await connection.query('SELECT * FROM users')
    res.json(rows)
  } catch (err) {
    next(err)
  }
})

// routerをappに接続する
app.use(router)

app.listen(PORT, async () => {
  console.log('server is listening on port: ', PORT)
});

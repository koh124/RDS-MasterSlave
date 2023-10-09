// テーブルを作成する

import mysql from 'mysql2/promise'

const dbConfig = {
  host: 'coda-rdsinstance-0ctu8bvekcyb.cgxjc4edrlzc.ap-northeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'coda',
}

async function setupDatabase() {
  try {
    let connection = await mysql.createConnection(dbConfig)

    // usersテーブルを作成する
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
      )
    `)

    // レコード1つ挿入
    const [result] = await connection.execute(`
        INSERT INTO users (name, email) VALUES (?, ?)
    `, ['Sample User', 'sample@email.com'])

    console.log('User created: ', result.insertId)
  } catch(err) {
    console.error('failed to setup database: ', err)
  }
}

setupDatabase().then(() => {
  console.log('setup database complete')
}).catch(err => {
  console.error('setup database failed: ', err)
})

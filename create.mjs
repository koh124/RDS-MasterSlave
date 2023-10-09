// データベースを作成する

import mysql from 'mysql2/promise'

const dbConfig = {
  host: 'coda-rdsinstance-0ctu8bvekcyb.cgxjc4edrlzc.ap-northeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password'
}

async function createDatabase() {
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig)

    const databaseName = 'coda'
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${databaseName}`)
    console.log('Database created: ', databaseName)
  } catch (err) {
    console.error('failed to create database: ', err)
  } finally {
    if (connection) {
      connection.end()
    }
  }
}

createDatabase();

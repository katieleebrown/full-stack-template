const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    // Need to update dbName for individual projects
    dbName = 'crit-role',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        // Need to update text inside collection for individual projects
        collection = db.collection('characters-and-players')
    })
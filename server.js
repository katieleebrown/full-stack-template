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
// Middleware comes before CRUD operations
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    try {
        res.render('index.ejs')
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running`)
})

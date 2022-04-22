// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');


// const user = "postgres";
// const host = "localhost";
// const database = "music_tour";
// const port = "5432";
// const pass = "3419";

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(database, user, pass, {
//     host,
//     port,
//     dialect: "postgres",
//     logging: false
// });

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }



// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
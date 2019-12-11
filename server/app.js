const express = require('express')
var bodyParser = require('body-parser')
const App = express()

App.use(bodyParser.urlencoded({ extended: false }))
App.use(bodyParser.json())

module.exports =  App
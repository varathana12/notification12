const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const Cosmic = require('cosmicjs')
const BootBot = require('bootbot')
require('dotenv').config()
const chrono = require('chrono-node')
var schedule = require('node-schedule')
const EventEmitter = require('events').EventEmitter
var config = {}
const reminders = []
const eventEmitter = new EventEmitter()
app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/', function(req, res) {
  res.send("api2")
})
app.post('/webhook/', function(req, res) {
  console.log(req.body)
  if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN){
    return res.send(req.query['hub.challenge'])
  }
  res.send('wrong token')
})
app.listen(app.get('port'), function(){
  console.log('Started on port', app.get('port'))
})


const { Schema, model } = require('mongoose')

var Topic = new Schema({
    title: String,
    description: String,
    link: String,
})

module.exports = model("Topic", Topic)
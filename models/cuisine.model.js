const mongoose = require('mongoose')
const {Schema} = require("mongoose");


const cuisineSchema = new Schema ({
    name: String
})

module.exports = mongoose.model("Cuisine", cuisineSchema)
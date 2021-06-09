const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: { required: true, type: String },
    address : String,
    location : String,
    chef : { required: true, type: String},
    cuisines: [{
        type: Schema.Types.ObjectId, //_id
        ref: "Cuisine"
    }],

})



module.exports = mongoose.model('Restaurant', restaurantSchema)
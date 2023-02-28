const mongoose = require('mongoose');

const olxSchema = mongoose.Schema({
        "name": String,
		"description" : String,
		"category" :String ,
		"image" : String,
		"location" : String,
		"postedAt" : String,
		"price" : Number
}, {
    versionKey: false
})

const olxModel = mongoose.model('olx', olxSchema);

module.exports = {
   olxModel
}
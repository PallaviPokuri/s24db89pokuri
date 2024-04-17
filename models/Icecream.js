const mongoose = require("mongoose")
const IcecreamSchema = mongoose.Schema({
Icecream_flavour: {type:String,length:15},
Icecream_toppings: String,
Icecream_price: {type:Number,min:10,max:50}
})
module.exports = mongoose.model("Icecream",IcecreamSchema)
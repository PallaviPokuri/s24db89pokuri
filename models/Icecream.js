const mongoose = require("mongoose")
const IcecreamSchema = mongoose.Schema({
Icecream_flavour: String,
Icecream_toppings: String,
Icecream_price: Number,
})
module.exports = mongoose.model("Icecream",IcecreamSchema)
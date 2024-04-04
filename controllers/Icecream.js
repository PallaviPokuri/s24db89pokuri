var Icecream = require('../models/Icecream');
// List of all Costumes
exports.Icecream_list = async function(req, res) {
    try{
    theIcecream = await Icecream.find();
    res.send(theIcecream);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific Costume.
exports.Icecream_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Icecream detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Icecream_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Icecream create POST');
};
// Handle Costume delete from on DELETE.
exports.Icecream_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Icecream_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};

// Handle a show all view
exports.Icecream_view_all_Page = async function(req, res) {
    try{
    theIcecream = await Icecream.find();
    res.render('Icecream', { title: 'Icecream Search Results', results: theIcecream });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle Icecream create on POST.
exports.Icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Icecream_flavour = req.body.Icecream_flavour;
    document.Icecream_toppings = req.body.Icecream_toppings;
    document.Icecream_price = req.body.Icecream_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
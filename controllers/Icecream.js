var Icecream = require('../models/Icecream');
// List of all Costumes
exports.Icecream_list = function(req, res) {
res.send('NOT IMPLEMENTED: Icecream list');
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
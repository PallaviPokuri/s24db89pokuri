var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Icecream_controller = require('../controllers/Icecream');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Icecream', Icecream_controller.Icecream_create_post);
// DELETE request to delete Costume.
router.delete('/Icecream/:id', Icecream_controller.Icecream_delete);
// PUT request to update Costume.
router.put('/Icecream/:id', Icecream_controller.Icecream_update_put);
// GET request for one Costume.
router.get('/Icecream/:id', Icecream_controller.Icecream_detail);
// GET request for list of all Costume items.
router.get('/Icecream', Icecream_controller.Icecream_list);
module.exports = router;
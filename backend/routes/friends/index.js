const express = require('express');
const router = express.Router();
var debug = require('debug')('backend:friend-router');

//controllers
const Friends = require( '../../controllers/Friends')

let friendController = new Friends()


/* GET friends listing. */
router.get('/', function(req, res) {

    let friendsList = friendController.getAllFriends()
    res.setHeader('content-type', 'application/json');
    res.setHeader('access-control-allow-origin', '*');
    let response = {
        data : friendsList
    }
    res.status(200).send(JSON.stringify(response));

});

router.post('/add', function(request, response) {

    let friend = request.body;
    let id = request.body.id;
    friendController.save(friend)
    let created = !friendController.getById(id);
    response.setHeader('content-type', 'application/json');
    response.status(200).send(JSON.stringify({result:created}));

});

router.get('/get/:id', function(request, response) {

    const {id} = request.params;
    let amigo = friendController.getById(id);
    //false
    if(!amigo){
        response.setHeader('content-type', 'application/json');
        response.status(404).send(JSON.stringify('No se encontró el amigo'))
    }else {
        response.setHeader('content-type', 'application/json');
        response.status(200).send(amigo);
    }

});

router.put('/deactivate/:id', function(request, response) {

    const { id } = request.params;
    let changed = friendController.setStatus(id,'Inactive');
    response.setHeader('content-type', 'application/json');
    response.status(200).send(JSON.stringify(changed));


});

router.put('/block/:id', function(request, response) {

    const { id } = request.params;
    let changed = friendController.setStatus(id,'Blocked');
    response.setHeader('content-type', 'application/json');
    response.status(200).send(JSON.stringify(changed));

});

router.delete('/delete/:id', function(request, response) {

    const { id } = request.params;
    let deleted = friendController.deleteFriend(id);
    response.setHeader('content-type', 'application/json');
    response.status(200).send(JSON.stringify(deleted));

});


module.exports = router;
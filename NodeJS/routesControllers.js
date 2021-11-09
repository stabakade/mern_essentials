// Routes
// Routing refers to how an application's endpoints (URIs) respond to client requests.

// Syntax
app.method('<path>', callbackFunction)

// Example
app.get("/", function (req, res) {
  res.json({message: "Hello world!"});
});

_____________________________________________________________________________________________________________

// Controllers
//Controllers can reduce huge chunk of code
// functions are kept in another file(controllers directory) and then accessed

app.post('/api/exercise/new-user', UserController.addUser); //new user

app.post('/api/exercise/add', UserController.addExercise); //new exercise


// basic integration of routers and controllers

Create an express router object to set up our routes
Import our tea controller from our controllers/tea.js file we created earlier
Create our first route with the controller function as the callback to handle the request.
Export the route to use in our server.js

const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const teaController = require('../controllers/tea'); 
// 3.
router.post('/tea', teaController.newTea); 
// 4. 
module.exports = router; // export to use in server.js


// this way we create API endpoints using router and controllers
// basic example
const express = require('express');
const router  = express.Router();
const teaController = require('../controllers/tea');

router.get('/tea', teaController.getAllTea);
router.post('/tea', teaController.newTea);
router.delete('/tea', teaController.deleteAllTea);

router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router;
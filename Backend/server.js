// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Streets     = require('./models/Street');
var mongoose   = require('mongoose/');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var port = process.env.PORT || 8080;        // set our port

//connect to local mongodb database
var db = mongoose.connect('mongodb://127.0.0.1:27017/main-street');

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
router.route('/streets')

    // create a Street (accessed at POST http://localhost:8080/api/streets)
    .post(function(req, res) {
        
        var street = new Streets();      // create a new instance of the Bear model
        street.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        street.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Street created!' });
        });
        
    })

    .get(function(req, res) {
        var search = req.query.q;
        Streets.find(function(err, streets) {
            if (err)
                res.send(err);

            var substreet =[];
            
            streets.forEach(function(street) {
            var streetname = {};
            streetname["id"] = street._id;
            streetname["name"] = street.name;
            substreet.push(streetname);
            });

            res.json(substreet);      
            //res.json(streets);
        });
    });


router.route('/streets/:id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/streets/:street_name)
    .get(function(req, res) {
        console.log('id: ' + req.params.id);
        Streets.findById(req.params.id, function(err, street){
            if (err)
                res.send(err);
            res.json(street);
        });
    })


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
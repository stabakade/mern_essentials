// node and its working/ properties
JavaScript runtime environment which is based on Google’s V8 Engine(written in C++)

single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.

Node.js application runs only on a single thread and by that, It mean whether that Node.js application is being used by 5 users or 5 
million users, it will only run on a single thread which makes the Node.js application blockable (which means that a single line of code 
can block the whole app because an only single thread is being used). So, to keep the Node.js application running, asynchronous code 
must be used everywhere having callback functions

// Event loop
Event-loop is what allows Node.js applications to run non-blocking asynchronous I/O based operations i.e, 
all the asynchronous code is managed and executed within the event-loop and before that, we can use our synchronous code

So, try to write synchronous code only for those operations which are executed only once at the start of our application and not every time, 
for Ex: reading some data from your computer memory which later can be requested by some user (many times) in asynchronous code.

an event-loop has 4 phases and for each phase, it sets a callback queue that contains callback functions from the emitted event.
-- Expired timeout callbacks
-- I/O polling
-- setImmediate() function
-- close callbacks
_______________________________________________________________________________________________________________________________________________

// middleware
middleware comes in the middle of request-response cycle, they have access to req and res 
next() method is a middleware function that calls the control of another function once the middleware code is accomplished

// application level middleware

// middleware is/are function(s) run between the client request and the server answer. 
// The most common middleware functionality needed are error managing, database interaction, getting info from static files or other resources. 
// To move on the middleware stack the next callback must be called
app.use(function (req, res, next) {
    console.log("first middle ware");                                                                                                             
    next(); // this is called to move on to the next middleware stack
});

app.use(function (req, res, next) {
    console.log("second middle ware");                                                                                                             
    next();
});

// error handling middleware
app.use(function (err, req, res, next) {

 console.error(err.stack)

 res.status(500).send('Something broke!')

 })

// third party middleware
// body-parser and cookie-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
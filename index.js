import express from 'express';
import bodyParser from 'body-parser'; // take in incomming post request

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 8000; //  backend server, some port haven't been used


// using json data
app.use(bodyParser.json());


// create a middleware to use the routes
app.use('/users', usersRoutes); // all routes in usersRoutes will start with /users

// create different routes, you can have multiple routes
app.get('/', (req, res) => {
    // console.log("[TEST]"); // this will show in the terminal
    res.send("Hello World"); // display in the browser
})


// nodemone will restart the server when we make changes
// command: nodemon index.js
// npm start will run the server
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
}
);

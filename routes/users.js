import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // generate unique id

const router = express.Router();

const users = []

// all routes in usersRoutes will start with /users already
router.get('/', (req, res) => {
    console.log(users)
    // res.send("Hello Users");
    res.json(users)
});

router.post('/', (req, res) => {
    // console.log('POST ROUTE REACHED')

    // console.log(req.body) // get the body from postman (req.body

    // add users to the array
    const user = req.body;

    // add user id to the user object, use uuidv4 to generate unique id
    users.push({ ...user, id: uuidv4() });

    // send response to postman
    res.send(`User with the name ${user.firstName} added to the database!`)

    // res.send('POST ROUTE REACHED') // send to postman
});

export default router;

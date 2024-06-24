import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // generate unique id

const router = express.Router();

let users = []  // const users = [] will not work, because we will be adding/deleteing users

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

// anything after /users. will be reached here
// want get user with id
// /users/2 for example, will return user with id 2
router.get('/:id', (req, res) => {
    const { id } = req.params;

    // find user with id
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}
);

// user delete route
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // filter out the user with the id
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
});

export default router;

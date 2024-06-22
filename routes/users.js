import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        LastName: "Doe",
        age: 25
    },
    {
        firtName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

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
    users.push(user)

    // send response to postman
    res.send(`User with the name ${user.firstName} added to the database!`)

    // res.send('POST ROUTE REACHED') // send to postman
});

export default router;

// require('express'); // this is how you import the express framework into the app

// //create the objects
// //you genereally dont need to add the semi-colon at the end, it is cz of good practice
const express = require('express');

const app = express();

// //you must declare the routes first.......they allow for navigation
// //let us close the terminal, we will use it later!

// localhost:27017
app.get('/', (req,res)=>{
    res.send('hello node api');
});

app.listen(27017, ()=>{
    console.log('Node API app is running on post 27017');
});






// //let us try the atlas method

// http://localhost:27017;


console.log("hello world");
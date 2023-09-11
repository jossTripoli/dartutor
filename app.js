// See express documentation: https://expressjs.com/en/starter/hello-world.html

// bring in express
const express = require("express");
// bring in path module which is a core module (built in by default, you don't have to install it) in Node.js
const path = require("path");
// bring in file system module which is another core module and will allow us to read the json files
const fs = require("fs");

// ***Init app
const app = express();

// Load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Serve static assets from the "public" folder
// can include things like JSON, images, stylesheets, JavaScript files, fonts, etc
app.use(express.static("public"));

// Now we can use the express app to create routes
// ***Home Route

// BASIC SYNTAX
// ES5 function syntax
// app.get('/about', function(req, res) {
//   res.send('Hello World!');
// });

// Vocab term: *CALL BACK FUNCTION*
// A callback is a function that is passed as an argument to another function and is executed after the completion of that function.
// Here, (req, res) => { res.send('Hello World!'); } is a callback function. It is passed as the second argument to the app.get() method. In this context, app.get() is an Express.js function used for defining a route handler for the HTTP GET request on the root URL ("/").

// SHORTER SYNTAX
// ES6 Vocab Term: *ARROW FUNCTION* syntax
// more concise and readable way to write functions
app.get("/", (req, res) => {
  // req = the HTTP request object
  // res = the HTTP response object

  // sends a response of "Hello World!" to the **BROWSER**
  // res.send('Hello World!');

  // define an array of people objects
  let people = [
    {
      id: 0,
      name: "joss",
      task: "about me 0",
    },
    {
      id: 1,
      name: "brandon",
      task: "about me 1",
    },
    {
      id: 2,
      name: "caden",
      task: "about me 2",
    },
    {
      id: 3,
      name: "erick",
      task: "about me 3",
    },
    {
      id: 3,
      name: "hua",
      task: "about me 4",
    },
    {
      id: 3,
      name: "liv",
      task: "about me 5",
    },
  ];

  // renders the index.pug page in the browser. can also send an object with data to the view
  res.render("index", {
    title: "Dartutor CSE 392-062",
    people: people,
  });
});

// Route for viewing a person based on their name
app.get("/people/:name", (req, res) => {
  // Get the person's name from the request
  const name = req.params.name;

  // Read the person's JSON file if it exists and save the data to a variable
  try {
    const data = fs.readFileSync(`${__dirname}/public/json/` + name + `.json`);
    const personData = JSON.parse(data.toString());

    // Render the name.pug template with the person's name like people/joss
    // Also send the person's name as a variable to the template
    // Also send the person's data
    res.render("people/" + name + "/" + name, { name: name, data: personData });
  } catch (error) {
    // console.error('Error reading or parsing the file:', error);
    console.error("No JSON file exists for " + name);
    res.render("people/" + name + "/" + name, { name: name });
  }
});



// Route for week 2 task pages
app.get("/week2/:name", (req, res) => {
  const name = req.params.name;
  res.render("people/" + name + "/week2", { name: name });
});


//Route for viewing caden's extra PUG page
app.get('/people/caden/message', (req, res) => {
    res.render('people/caden/message');
});

app.get("/hua2", (req, res) => {
  res.render("people/hua/hua2");
});

//Route added by liv to take to another pug page 
app.get('/people/liv/extra', (req, res) => {
        res.render("people/liv/next_liv");
});

//Route added by liv to take you to avatar.pug
app.get('/people/liv/avatarPage', (req, res) => {
  res.render("people/liv/avatar");
});


//Route added by liv to take you to iphone.pug
app.get('/people/liv/iphonePage', (req, res) => {
  res.render("people/liv/iphone");
});







// Route for viewing PUG kitchen sink page
app.get("/kitchenSink", (req, res) => {
  res.render("kitchenSink");
});

// ***Start Server
// listen for HTTP requests on port 3000 and log a message to the console to confirm that the server is running
app.listen(3000, () => console.log("Server started on port 3000..."));

// To run this file, type `npm start` in the terminal. This will run the start script in 'package.json'.
// Next open your browser and go to http://localhost:3000/ to see the response displayed in the browser.

// To stop the server, type `ctrl + c` in the terminal.

// *To automatically restart the server when you make changes to the code, install nodemon:
// npm install -g nodemon
// Now run `nodemon` in the terminal and it will automatically restart the server when you make changes to the code.

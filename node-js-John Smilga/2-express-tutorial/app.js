// Performing GET,POST,PUT and DELETE http methods on an array (i.e. people)
const express = require("express");
const app = express();
const { people } = require("./data");
const PORT = 5050;
// express's built-in middleware :
// Static assets:
app.use(express.static("./methods-public"));
// Parse form data:
app.use(express.urlencoded({ extended: false }));
// Parse json:
app.use(express.json());
// GET
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
  const {name} = req.body;
  if(!name){
    return res.status(400).json({success:false,message:"Please provide a name value"})
  }
  res.status(201).json({success:true,person:name});
});
app.post("/login", (req, res) => {
  // console.log(req.body)
  let { name } = req.body;
  if (!name) {
    res.status(401).send("Please provide the credentials.");
  } else {
    res.status(200).send(`Welcome ${name}`);
  }
});
/* POST - two flavors : for testing the post method we have two flavors 1-using Postman
or Insomnia to checkout the Post request- Or 2-making a working application such as what
we did here and make a login form (also we are going to show 2 approaches for this one(axios and
  the other one  node)).
 
Remember that with POST request sending the 'body' is crucial! body contains
data that user is sending to the server i.e. credentials.
*/

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

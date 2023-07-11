// Performing GET,POST,PUT and DELETE http methods on an array (i.e. people)
const express = require("express");
const app = express();
const { people } = require("./data");
const PORT = 5050;

// 🌼^🌼^🌼^🌼^🌼
// express's built-in middleware :
// Static assets:
app.use(express.static("./methods-public"));
// Parse form data: ()
app.use(express.urlencoded({ extended: false }));
// Parse json:
app.use(express.json());
// 🌼^🌼^🌼^🌼^🌼

// GET
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
// POST
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name value" });
  }
  res.status(201).json({ success: true, person: name });
});
// POST
app.post("/login", (req, res) => {
  // console.log(req.body)
  let { name } = req.body;
  if (!name) {
    res.status(401).send("Please provide the credentials.");
  } else {
    res.status(200).send(`Welcome ${name}`);
  }
});
// POST handled by Postman
app.post("/api/postman/people", (req, res) => {
  const { love } = req.body;
  res.status(200).json({ status: true, data: [...people, love] });
});
// PUT handled by Postman
// In the following codes we are using body and route params
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let target_person = people.find((person) => person.id === Number(id));
  if (!target_person) {
    return res
      .status(404)
      .json({ success: false, msg: `No user with id ${id} is existed...` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ update: true, data: newPeople });
});
// DELETE
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  let target_person = people.find((person) => person.id === Number(id));
  if (!target_person) {
    return res
      .status(404)
      .json({ success: false, msg: `No user with id ${id} is existed...` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ update: true, data: newPeople });
});
/* POST - two flavors : for testing the post method we have two flavors 1-using Postman
or Insomnia to test the Post request- Or 2-making a working application such as what
we did here - make a login form (also we are going to show 2 approaches for this one(axios(modern)and
  the other one which is form tag with action and method attribute (traditional))).
 
Remember that with POST request sending the 'body' is crucial! body contains
data that user is sending to the server i.e. credentials.
*/

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

// Recap :
// 🌼GET    👉 Read Data
// 🌼POST   👉 Sending Data to Insert it in  (needs body)
// 🌼PUT    👉 Update(edit) Data
// 🌼DELETE 👉 Delete Data

// 🌼req.params 👉(:) params
// 🌼req.query  👉(?) query

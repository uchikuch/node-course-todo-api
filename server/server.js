let express = require("express");
let bodyParser = require("body-parser");

const { ObjectID } = require("mongodb");
let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");

let app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  // console.log(req.body);
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  let id = req.params.id;

  // validate id using is valid
  // 404 - send back empty send
  if (!ObjectID.isValid(id)) {
    console.log("id not valid");
    res.status(404).send();
  }

  // findById
  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        res.status(404).send();
        console.log("Todo Not Found");
      } else {
        console.log("TodoByID", todo);
        res.status(200).send({ todo });
      }
    })
    .catch(e => res.status(400).send());
  // success
  // if todo - send back
  // if no todo - send back 404 with empty body
  // error
  // 400 - send empty body back
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});

module.exports = { app };

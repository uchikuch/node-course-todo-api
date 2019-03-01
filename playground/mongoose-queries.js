const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// let id = "5c77ca784e9ff92162d1514011";

let id = "5c765e7b65fcf0270e4bdc3f";

// if (!ObjectID.isValid(id)) {
//   console.log("id not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("ID not found");
//     }
//     console.log("TodoByID", todo);
//   })
//   .catch(e => console.log(e));

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User Not Found");
    }
    console.log("UserByID", user);
  })
  .catch(e => console.log(e));

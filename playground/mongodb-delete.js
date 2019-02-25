// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// Object destructuring
// let user = { name: "Uche", age: "33" };
// let { name } = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  // deletemany
  //   db.collection("Todos")
  //     .deleteMany({ text: "Eat Lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  // deleteOne
  //   db.collection("Todos")
  //   .deleteOne({ text: "Eat Lunch" })
  //   .then(result => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  db.collection("Todos")
    .findOneAndDelete({ completed: false })
    .then(result => {
      console.log(result);
    });

  // client.close();
});

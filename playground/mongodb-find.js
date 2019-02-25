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

  //   db.collection("Todos")
  //     .find({
  //       _id: new ObjectID("5c73c4fb2cadf104830b8ddf")
  //     })
  //     .toArray()
  //     .then(
  //       docs => {
  //         console.log("Todos");
  //         console.log(JSON.stringify(docs, undefined, 2));
  //       },
  //       err => {
  //         console.log("unable to fetch todos", err);
  //       }
  //     );

  //   db.collection("Todos")
  //     .find({})
  //     .count()
  //     .then(
  //       count => {
  //         console.log(`Todos count: ${count}`);
  //       },
  //       err => {
  //         console.log("unable to fetch todos", err);
  //       }
  //     );

  db.collection("Users")
    .find({ name: "Dobee" })
    .toArray()
    .then(
      docs => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("unable to fetch user(s)", err);
      }
    );
  // client.close();
});

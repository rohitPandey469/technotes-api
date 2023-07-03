const mongoose = require("mongoose");
const User = require("./models/User");
const Note = require("./models/Note");
const connectDB = require("./config/dbConn");

connectDB();

const seedUsers = [
  {
    username: "Fairy Eggplant",
    password: "rohit125",
    roles: ["Employee"],
  },
  {
    username: "Organic Goddesss Melon",
    password: "rohit125",
    roles: ["Employee"],
  },
  {
    username: "Seedless Watermelon",
    password: "rohit125",
    roles: ["Employee"],
  },
  {
    username: "DanD",
    password: "Admin",
    roles: ["Admin"],
  },
  { username: "Rohit", password: "Rohit", roles: ["Admin"] },
  {username:"Sanya Saxena",
password:"SanyaSaxena",
roles:["Admin"]
}
];

// const seedNotes = [
//   {
//     user: "6499bbad2b5a0a4d59d06e90",
//     title: "First Note",
//     text: "Hey there!!!",
//   },
//   {
//     user: "6499bbad2b5a0a4d59d06e90",
//     title: "Second Note",
//     text: "Hey there!!!",
//   },
// ];

// User.insertMany(seedUsers)
//   .then(() => {
//     console.log("Fine");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

Note.insertMany(seedUsers)
  .then(() => {
    console.log("Fine");
  })
  .catch((e) => {
    console.log(e);
  });

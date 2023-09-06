const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@examle.com",
    password: bcrypt.hashSync("56789", 10),
    isAdmin: true,
  },
  {
    name: "Ahmed Ali",
    email: "Ahmed@examle.com",
    password: bcrypt.hashSync("56789", 10),
  },
  {
    name: "Hassan Omar",
    email: "Hassan@examle.com",
    password: bcrypt.hashSync("56789", 10),
  },
];

module.exports = users;

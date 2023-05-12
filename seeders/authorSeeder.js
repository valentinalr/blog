const { Author } = require("../models");

module.exports = async function () {
  const authors = [
    {
      fullName: "Fulano Uno",
      email: "fulanouno@gmail.com",
      password: "1234",
    },
    {
      fullName: "Fulano Dos",
      email: "fulanodos@gmail.com",
      password: "12345",
    },
  ];
  await Author.bulkCreate(authors);
};

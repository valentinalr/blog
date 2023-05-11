module.exports = async function (Author) {
  await Author.bulkCreate([
    {
      fullName: "Fulano Uno",
      email: "fulanouno@gmail.com",
      password: "1234",
    },
    {
      fullName: "Fulano Dos",
      email: "fulanodos@gmail.com",
      password: "1234",
    },
  ]);
};

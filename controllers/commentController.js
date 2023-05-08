const { Comment } = require("../models");

async function review(req, res) {
  console.log(req.body);
  const { inputName: name, content: content } = req.body;
  //return res.json(req.body);
}

module.exports = {
  review,
};

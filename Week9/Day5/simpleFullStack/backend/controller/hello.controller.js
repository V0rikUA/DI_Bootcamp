const helloResponse = (req, res) => {
  res.json("hello");
};

const helloUserResponse = (req, res) => {
  const { user } = req.params;
  res.send(`Hello ${user}`);
};

module.exports = { helloResponse, helloUserResponse };

module.exports = (req, res) => {
  res.writeHead(200, {
    "content-type": "text/plain"
  });
  res.end("Ok");
};

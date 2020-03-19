module.exports = (req, res) => {
  res.writeHead(200, {
    "content-type": "application/json; charset=utf-8"
  })

  res.end(JSON.stringify({
    oauth: {
      description: "Routes to handle user connexion"
    }
  }))
};

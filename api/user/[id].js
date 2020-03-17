module.exports = (req, res) => {
    console.log(req.url)

    res.writeHead(200, {
        "content-type": "text/plain"
    })
    res.end("Ok")
}
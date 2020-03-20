const responseHeader = require("./_utils/responseHeader");
const apiDoc = require("./_utils/apidoc.json")

module.exports = (req, res) => {
  if (req.method !== "GET") {
    
  }  

  responseHeader(res, {code: 200});
  res.end(JSON.stringify(apiDoc))
};

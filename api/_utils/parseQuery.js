const { parse } = require("url");

module.exports = function(queryToParse) {
  if (new URLSearchParams(parse(queryToParse).search).has("mode")) {
    query = new URLSearchParams(parse(queryToParse).search).get("mode");

    if (query === "dev") return query;
    return undefined;
  }
  return undefined;
};

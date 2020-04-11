const responserServer = require("./responseServer");

/**
 * Parse the body request when there is a POST, PUT method
 * @param {Object} request - A NodeJs HttpIncomingMessage object.
 * @param {Object} response - A nodeJs HttpServerResponse object.
 * @returns If there is an error the `response` object will be called with the `end()` method to abort the request either return the data parsed.
 */
module.exports = (request, response) => {
  let body;

  request.setEncoding("utf-8");
  request
    .on("data", function dataEvent(dataBody) {
      body = dataBody;
    })
    .on("end", function endEvent() {
      if (body) {
        try {
          const bodyParsed = JSON.parse(body);
          return request.emit("bodyParsed", bodyParsed);
        } catch (e) {
          return responserServer(response, 406);
        }
      }

      return responserServer(response, 422);
    });
};

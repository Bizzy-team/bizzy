const responserServer = require("../_utils/responseServer");

/**
 * Parse the body request when there is a POST, PUT method
 * @param {Object} request - A NodeJs HttpIncomingMessage object.
 * @param {Object} response - A nodeJs HttpServerResponse object.
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

/**
 * Parse the body request when there is a POST, PUT method
 * @param {Object} request - A NodeJs HttpIncomingMessage object.
 */
module.exports = request => {
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
          return request.emit("bodyParsed", {
            code: 406,
            error: true,
            message: "This route can only receive JSON data."
          });
        }
      }

      return request.emit("bodyParsed", {
        code: 422,
        error: true,
        message: "Data incorrect or missing"
      });
    });
};

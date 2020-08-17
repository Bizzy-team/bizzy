const { createReadStream } = require("fs");
const { join } = require("path");
const { Transform } = require("stream");
const { promises } = require("fs");

/**
 * Take a file in the `templates` folder update his content and return him as a Transform stream.
 * @param {String} fileName The file name in the `templates` folder to update content.
 * @param {String} dataToInsert The data to insert in the new readStream.
 */
module.exports = function handleStreamMail(fileName, dataToInsert) {
  const pathToFile = join(process.cwd(), "api", "_templates", `${fileName}.html`);

  return promises
    .access(pathToFile)
    .then(function() {
      const T = new Transform({
        transform(chunk, enc, cb) {
          let data = chunk.toString();

          if (!data.includes("{{}}")) {
            return {
              code: 500
            };
          }

          data = data.replace("{{}}", dataToInsert);
          return cb(null, data);
        }
      });

      const Ws = createReadStream(
        join(process.cwd(), "api", "_templates", `${fileName}.html`)
      );
      Ws.pipe(T);

      return T;
    })
    .catch(function() {
      return {
        code: 500
      };
    });
};

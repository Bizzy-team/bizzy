/**
 * Function who define the response header and return the response body.
 * @param {Object} response - A nodejs HTTPServerResponse object.
 * @param {Number} code - The http status response code.
 * @param {Object} [data = {}] - An object who contains the http response body, and others data who modify the function behavior.
 * @param {Object} [data.modifyResponse = {}] - An object who overrides if present the response.
 * @param {Object} [data.serverHeader = {}] - An object of header properties to add on some request.
 * @param {String} [data.content = ""] - A string to send to the user, if nothing is defined a default message will be send
 */
module.exports = (response, code, data = {}) => {
  let error;
  const defaultHeader = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:52185"
        : "https://bizzy.now.sh"
    }`,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Expose-Headers":
      "Authorization ,ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
    "content-type": "application/json; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'",
    Status: code,
    Vary: "Origin",
    "X-XSS-Protection": "1;mode=block",
    "Referrer-Policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "deny",
    "X-RateLimit-Limit": 60
  };

  // Server error
  if (!code || code >= 500) {
    error = new Error("Server error");
  }

  const httpCode = {
    200: {
      message: data.content ? data.content : ""
    },
    400: {
      error: true,
      message: data.content ? data.content : "Bad request"
    },
    401: {
      error: true,
      message: data.content ? data.content : "You don't have access here."
    },
    403: {
      error: true,
      message: "User unknown"
    },
    405: {
      error: true,
      message: `This route can only be access with ${data.content}`
    },
    406: {
      error: true,
      message: "This route can only be access by JSON data."
    },
    409: {
      error: true,
    },
    422: {
      error: true,
      message: data.content ? data.content : "Missing data in body"
    },
    500: {
      error: true,
      message: error && error.message,
      file: error && rror.stack
    }
  };

  response.writeHead(code, {
    ...defaultHeader,
    ...data.serverHeader
  });

  if (data.modifyResponse) {
    httpCode[code] = {...data.modifyResponse}
  }

  return response.end(JSON.stringify(httpCode[code]));
};

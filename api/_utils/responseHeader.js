module.exports = (response, data) => {
  const defaultHeader = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Expose-Headers":
      "Authorization ,ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
    "content-type": "application/json; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'",
    Status: data.code,
    Vary: "Origin",
    "X-XSS-Protection": "1;mode=block",
    "Referrer-Policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "deny",
    "X-RateLimit-Limit": 60
  };

  return response.writeHead(data.code, {
    ...defaultHeader,
    ...data.serverHeader
  });
};

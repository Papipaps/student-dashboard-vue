const logger = (req, res, next) => {
  const now = new Date();
  console.log(
    `${now.toISOString()} - ${req.method} ${req.url} - from ${req.socket.remoteAddress}`
  );
  next();
}

module.exports = { logger };

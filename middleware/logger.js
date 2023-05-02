function log(req) {
    const now = new Date();
    console.log(
      `${now.toISOString()} - ${req.method} ${req.url} - from ${req.socket.remoteAddress}`
    );
  }
  
  module.exports = { log };
  
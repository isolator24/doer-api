// @desc    Logs
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // To move on to the next piece of the cycle
    next();
  }

  module.exports = logger;
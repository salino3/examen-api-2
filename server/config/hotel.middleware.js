

module.exports = (req, res, next) => {
  if (req.path === '/hotels') {
    hotelMiddleware(req, res, next);
  } else {
    next();
  }
};

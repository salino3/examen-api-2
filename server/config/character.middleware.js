

module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    Middleware(req, res, next);
  } else {
    next();
  }
};

function makeUserAvailableInViews(req, res, next) {
  res.locals.user = req.user;
  console.log(req.user);
  return next();
}

module.exports = makeUserAvailableInViews;

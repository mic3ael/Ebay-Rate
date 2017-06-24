/*
 * GET home page.
 */

exports.index = function(req, res) {
  console.log("Hello");
  res.render('index');
};

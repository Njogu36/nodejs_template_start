const reset_password_page = (req, res) => {
  const id = req.params.id;
  res.render("./authentication/reset_password.jade", {
    id: id,
  });
};
module.exports = {
  reset_password_page: reset_password_page,
};

// LIBRARY
const mongojs = require("mongojs");
const bcrypt = require("bcryptjs");

// DATABASE
const db = mongojs("mongodb://localhost/main_db_");

const reset_password_post = (req, res) => {
  const id = req.params.id;
  const { password, confirm_password } = req.body;
  if (password !== confirm_password) {
    req.flash("danger", "Passwords do not match.");
    res.redirect("/reset_password/" + id);
  } else {
    let query = {
      _id: mongojs.ObjectId(id),
    };
    let data = {};
    data.password = password;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        data.password = hash;
        db.users.update(query, { $set: data }, () => {
          req.flash("info", "Password updated successfully.");
          res.redirect("/reset_password/" + id);
        });
      });
    });
  }
};

module.exports = {
  reset_password_post: reset_password_post,
};

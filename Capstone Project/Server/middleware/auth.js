const UserSession = require("../models/user_session");
const { Op } = require("sequelize");

function auth(req, res, next) {
  let session_id = req.get("session_id");
  UserSession.findOne({
    where: {
      session_id: session_id,
      session_expiry_date: { [Op.gte]: Date.now() },
    },
  })
    .then((result) => {
      req.body.user_id = result.user_id;
      next();
    })
    .catch((e) => {
      res.status(401).send(e);
    });
}

module.exports = auth;

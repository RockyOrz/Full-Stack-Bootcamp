const express = require("express");
const router = express.Router();
const User = require("../models/user");
const User_session = require("../models/user_session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/register", (req, res) => {
  let plainPassword = req.body.password;

  bcrypt.hash(plainPassword, saltRounds, function (err, hash) {

    let user_data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
    };

    User.create(user_data)
      .then((result) => {
        result.password = "";
        res.status(200).send(result);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  });
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  let user_data = {
    where: { email: email },
  };

  User.findOne(user_data)
    .then((exist_user) => {
      if (exist_user) {
        
        bcrypt.compare(password, exist_user.password,  (err, match) => {

          if (match) {
            User_session.create({
              user_id: exist_user.user_id,
              session_id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16),
              session_expiry_date: new Date(Date.now()+(1000*60*60*24)),
              session_start_date: new Date(Date.now()),
              client_ip_address: ip
            }).then((result)=>{
              res.status(200).send(result);
            }).catch((e)=>{
              res.sendStatus(500).send(e);
            });
          } else {
            res.status(401).send("Incorrect password.");
          }
        });
      } else {
        res.status(404).send("User does not exist.");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
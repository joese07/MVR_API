const { User } = require("../models");

module.exports = {
  index: (req, res) => {
    User.findAll().then((users) => {
      res.status(200).json(users);
    });
  },

  show: (req, res) => {
    User.findOne({ where: { id: req.params.id } }).then((user) => {
      res.status(200).json(user);
    });
  },

  store: (req, res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address,
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(422).json(" can't create user");
      });
  },

  update: (req, res) => {
    User.update(
      {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(422).json("can't edit user");
      });
  },

  destroy: (req, res) => {
    User.destroy({
      where: { id: req.params.id },
    }).then((user) => {
      res.status(200).json(user);
    });
  },
};

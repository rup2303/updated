const db = require("../models");
const { favourite } = require("../models");
const Favourite = db.favourite;
const { status } = require("../models");
const Status = db.status;
//Find All fav of user by userId
exports.findAll = (req, res) => {
    const user_Id = req.params.id;
  
    return Favourite.findAll({
      include: ["quizs"],
      where: { userId: user_Id, status: true }
    }).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
  
//Find incomplete quize of user by userId
exports.findAllIncomplete = (req, res) => {
    const user_Id = req.params.id;
  console.log(user_Id);
    return Status.findAll({
      include: ["quizst"],
      attributes: ['quizeId'],
      group: ['quizeId'],
      
      where: { userId: user_Id }
    }).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
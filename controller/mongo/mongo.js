const Schema = require('../../DataBase/schema');
const mongo = require('../../DataBase/mongo');

module.exports = {
  addUser: (req, res) => {
    mongo.connect();
    Schema.User.create(req.body, (err) => {
      if (err) {
        res.status(400).send(err);
        mongo.db.close();
      } else {
        res.status(200).send();
        mongo.db.close();
      }
    });
  },
  checkUser: (req, res) => {
    mongo.connect();
    const query = Schema.User.where(req.body);
    query.findOne((err, data) => {
      if (err) {
        res.status(401).send('error');
        mongo.db.close();
      } else {
        if (data) {
          res.status(200).send('success');
        } else {
          res.status(403).send(err);
        }
        mongo.db.close();
      }
    });
  },
  addMovie: (req, res) => {
    mongo.connect();
    Schema.User.findOneAndUpdate(
      { userName: req.body.user },
      { $addToSet: { movies: req.body.movie } },
      (err, success) => {
        if (err) {
          res.status(400).send(err);
          console.log('error');
          mongo.db.close();
        } else {
          res.status(200).send(success);
          console.log(req.body);
          mongo.db.close();
        }
      },
    );
  },
};

const Pet = require('../models/pet.model');

module.exports = {
  getPets: (req, res) => {
    Pet.find({}).collation({locale: "en"}).sort({petType:1})
      .then((pets) => {
        res.json(pets);
      })
      .catch((err) => {
        console.log('ERROR IN Get all', err);
        res.status(400).json({ message: 'something went wrong in find all pets', error: err });
      });
  },
  getPetById: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        console.log('ERROR IN Get Pet', err);
        res.status(400).json({ message: 'something went wrong in find pet', error: err });
      });
  },
  createPet: (req, res) => {
    Pet.create(req.body)
      .then((newPet) => {
        res.status(201).json(newPet);
      })
      .catch((err) => {
        console.log('ERROR IN create Pet', err);
        res
          .status(400)
          .json({ message: 'something went wrong in create pet', errors: err.errors });
      });
  },
  updatePet: (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        console.log('ERROR IN update Pet', err);
        res.status(400).json({ message: 'something went wrong in update pet', error: err });
      });
  },
  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        console.log('ERROR IN delete Pet', err);
        res.status(400).json({ message: 'something went wrong in delete pet', error: err });
      });
  }
};
const petController = require('../controllers/pet.controller');

module.exports = (app) => {
  app.get('/api/pets', petController.getPets);
  app.get('/api/pets/:id', petController.getPetById);
  app.post('/api/pets', petController.createPet);
  app.put('/api/pets/:id', petController.updatePet);
  app.delete('/api/pets/:id', petController.deletePet);
};
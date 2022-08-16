const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            required: [true, "Fill the pet's name!"],
            minLength: [3, "Pet name must be at least 3!"],
            
        },
        
        petType: {
            type: String,
            required: [true, "Fill in the pet's type!"],
            minLength: [3, "Pet type must be at least 3!"],
        },
        petDescription: {
            type: String,
            required: [true, "Fill in the pet's description!"],
            minLength: [3, "Pet description must be at least 3 characters!",]
        }
    }, { timestamps: true }
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
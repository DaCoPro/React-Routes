const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    name: {
        type: String, 
        required: true
    },  
    grade: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  }, {
    timestamps: true,
});

module.exports = mongoose.model('Route', routeSchema);
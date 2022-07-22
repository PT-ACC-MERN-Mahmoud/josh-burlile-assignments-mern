const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        maxLength: [40, "Name length cannot be longer than 40 characters"]
    }
    
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);


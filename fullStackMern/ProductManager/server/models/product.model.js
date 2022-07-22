const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        maxlength: [40, "Title length can be longer than 40 characters"]
    },
    price: {
        type: Number,
        required: [true, "A price is required"],
    },
    description: {
        type: String,
        required: [true, "A description is required"],
        maxlength: [100, "Description length cannot be longer than 100 characters"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);


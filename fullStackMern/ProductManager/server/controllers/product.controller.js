const Product = require('../models/product.model');    /* this is new */

module.exports.createProduct = (request, response) => {
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch((err) => {
            console.log("Error in Create Product request", err);
                response.status(400).json({ message: "Something went from in create product", error:err })
            });
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(products);
        })
        .catch(err => {
            console.log("Error in GET All request", err);
            response.status(400).json({ message: "Something went from in find all products", error:err })
        })
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch((err) => {
        console.log("Error in GET Product request", err);
            response.status(400).json({ message: "Something went from in find product", error:err })
        });
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch((err) => {
            console.log("Error in Update Product request", err);
                response.status(400).json({ message: "Something went from in update product", error:err })
            });
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then((product) => response.json(product))
        .catch((err) => {
            console.log("Error in Delete Product request", err);
                response.status(400).json({ message: "Something went from in delete product", error:err })
            });
}






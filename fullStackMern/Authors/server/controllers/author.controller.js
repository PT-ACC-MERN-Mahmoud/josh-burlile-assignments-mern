const Author = require('../models/author.model');

module.exports = {
    createAuthor: (request, response) => {
        Author.create(request.body)
            .then(newAuthor => {
                response.status(201).json(newAuthor);
            })
            .catch((err) => {
                console.log("Error in Create author request", err);
                response.status(400).json({ message: "Something went wrong in create author", error: err });
            });
    },

    getAllAuthors: (request, response) => {
        Author.find({})
            .then(authors => {
                console.log(authors); //console logs are optional, but they are highly recommended for troubleshooting!
                response.json(authors);
            })
            .catch(err => {
                console.log("Error in GET All request", err);
                response.status(400).json({ message: "Something went wrong in find all authors", error: err })
            });
    },

    getAuthor: (request, response) => {
        Author.findOne({ _id: request.params.id })
            .then(author => {
                response.json(author);
            })
            .catch((err) => {
                console.log("Error in GET author request", err);
                response.status(400).json({ message: "Something went wrong in find author", error: err })
            });
    },

    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
            .then(updatedAuthor => {
                response.json(updatedAuthor);
            })
            .catch((err) => {
                console.log("Error in Update Author request", err);
                response.status(400).json({ message: "Something went wrong in update author", err })
            });
    },

    deleteAuthor: (request, response) => {
        Author.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
            .then((author) => {
                response.json(author);
            })
            .catch((err) => {
                console.log("Error in Delete Author request", err);
                response.status(400).json({ message: "Something went wrong in delete author", error: err })
            });
    },
};






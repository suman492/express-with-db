const BookModel = require('../models/bookModel');

exports.createBook = async(req,res) => {
    try {
        let singleBook = new BookModel({title: req.body.title, author: req.body.author });
        singleBook = await singleBook.save();
        res.send(singleBook);
    } catch(err) {
        res.status(400).send(err.message);
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await BookModel.find();
        res.send(allBooks);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getBookById = async (req, res) => {
    try {
        const bookById = await BookModel.findById(req.params.id);
        if (!bookById) return res.status(404).send('Book not found in database');
        res.send(bookById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
var express = require('express');

var bookRouter = express.Router();

var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'The Wind in the Willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        },
        {
            title: 'Life On The Mississippi',
            genre: 'History',
            author: 'Mark Twain',
            read: false
        }
    ];

bookRouter.route('/')
    .get(function (req, res) {
        /*looks for books.ejs */
        res.render('books', {
            title: 'Books',
            nav: [
                {Link: '/Books', Text: 'Books'},
                {Link: '/About', Text: 'Authors'}
            ],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });

module.exports = bookRouter;
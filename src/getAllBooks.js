// Membuat fungsi terpisah dari handler
const books = require('./books');

const getAllBooks = (request, h) => {
  const {name, reading, finished} = request.query;

  let book;

  if (reading === '1') {
    const read = books.filter((book) => book.reading === (reading === '1')).map((book) => ({
      'id': book.id,
      'name': book.name,
      'publisher': book.publisher,
    }));
    book = read;
    return h.response({
      status: 'success',
      data: {
        'books': book,
      },
    });
  }

  if (reading === '0') {
    const unread = books.filter((book) => book.reading === (reading !== '1')).map((book) => ({
      'id': book.id,
      'name': book.name,
      'publisher': book.publisher,
    }));
    book = unread;
    return h.response({
      status: 'success',
      data: {
        'books': book,
      },
    });
  }

  if (finished === '0') {
    const unfinished = books.filter((book) => book.finished === false).map((book) => ({
      'id': book.id,
      'name': book.name,
      'publisher': book.publisher,
    }));
    book = unfinished;
    return h.response({
      status: 'success',
      data: {
        'books': book,
      },
    });
  }

  if (finished === '1') {
    const finish = books.filter((book) => book.finished === (finished === '1')).map((book) => ({
      'id': book.id,
      'name': book.name,
      'publisher': book.publisher,
    }));
    book = finish;
    return h.response({
      status: 'success',
      data: {
        'books': book,
      },
    });
  }

  //Saran
  if (name) {
    const filterByName = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase())).map((book) => ({
      'id': book.id,
      'name': book.name,
      'publisher': book.publisher,
    }));
    book = filterByName;
    return h.response({
      status: 'success',
      data: {
        'books': book,
      },
    });
  }

  if (name === undefined) {
    const randomBook = books.map((book) => {
      return {
        'id': book.id,
        'name': book.name,
        'publisher': book.publisher,
      };
    });
    book = randomBook;
    return h.response({
      status: 'success',
      data: {
        'books': book,
      },
    });
  }
};

module.exports = getAllBooks;
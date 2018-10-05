using bookshelf.Models;
using System.Collections.Concurrent;
using System.Linq;
using System.Collections.Generic;

namespace bookshelf.Services
{
    public class BookRepository : IBookRepository
    {
        private ConcurrentDictionary<int, Book> _books;

        public BookRepository()
        {
            _books = new ConcurrentDictionary<int, Book>();
            _books.TryAdd(1, new Book(){ Id = 1, Author = new Author { Name = "Author 10" } });
        }

        public int Count()
        {
            return _books.Count;
        }

        public IEnumerable<Book> GetBooks(int page, int count)
        {
            return _books.Values.Skip(page * count).Take(count);
        }

        public Book GetById(int id)
        {
            return _books.TryGetValue(id, out Book book) ? book : throw new BookNotFoundException();
        }
    }
}
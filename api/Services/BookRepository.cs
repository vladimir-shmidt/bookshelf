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
            _books.TryAdd(10, new Book(){ Id = 10, Authors = new[] { new Author { Name = "Author 10" } } });
            _books.TryAdd(11, new Book(){ Id = 11, Authors = new[] { new Author { Name = "Author 101" } } });
            _books.TryAdd(12, new Book(){ Id = 12, Authors = new[] { new Author { Name = "Author 102" } } });
            _books.TryAdd(12, new Book(){ Id = 12, Authors = new[] { new Author { Name = "Author 102" } } });
            _books.TryAdd(12, new Book(){ Id = 12, Authors = new[] { new Author { Name = "Author 102" } } });
            _books.TryAdd(12, new Book(){ Id = 12, Authors = new[] { new Author { Name = "Author 102" } } });
            _books.TryAdd(12, new Book(){ Id = 12, Authors = new[] { new Author { Name = "Author 102" } } });
            _books.TryAdd(12, new Book(){ Id = 12, Authors = new[] { new Author { Name = "Author 102" } } });
            _books.TryAdd(13, new Book(){ Id = 13, Authors = new[] { new Author { Name = "Author 103" } } });
            _books.TryAdd(14, new Book(){ Id = 14, Authors = new[] { new Author { Name = "Author 104" } } });
            _books.TryAdd(15, new Book(){ Id = 15, Authors = new[] { new Author { Name = "Author 105" } } });
            _books.TryAdd(16, new Book(){ Id = 16, Authors = new[] { new Author { Name = "Author 106" } } });
            _books.TryAdd(17, new Book(){ Id = 17, Authors = new[] { new Author { Name = "Author 107" } } });
            _books.TryAdd(18, new Book(){ Id = 18, Authors = new[] { new Author { Name = "Author 108" } } });
            _books.TryAdd(19, new Book(){ Id = 19, Authors = new[] { new Author { Name = "Author 109" } } });
            _books.TryAdd(20, new Book(){ Id = 20, Authors = new[] { new Author { Name = "Author 100" } } });
            _books.TryAdd(21, new Book(){ Id = 21, Authors = new[] { new Author { Name = "Author 1011" } } });
            _books.TryAdd(22, new Book(){ Id = 22, Authors = new[] { new Author { Name = "Author 1012" } } });
            _books.TryAdd(23, new Book(){ Id = 23, Authors = new[] { new Author { Name = "Author 1013" } } });
            _books.TryAdd(24, new Book(){ Id = 24, Authors = new[] { new Author { Name = "Author 1014" } } });
            _books.TryAdd(25, new Book(){ Id = 25, Authors = new[] { new Author { Name = "Author 1015" } } });
            _books.TryAdd(26, new Book(){ Id = 26, Authors = new[] { new Author { Name = "Author 1016" } } });
            _books.TryAdd(27, new Book(){ Id = 27, Authors = new[] { new Author { Name = "Author 1017" } } });
            _books.TryAdd(28, new Book(){ Id = 28, Authors = new[] { new Author { Name = "Author 1018" } } });
            _books.TryAdd(29, new Book(){ Id = 29, Authors = new[] { new Author { Name = "Author 1019" } } });
            _books.TryAdd(30, new Book(){ Id = 30, Authors = new[] { new Author { Name = "Author 1020" } } });
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
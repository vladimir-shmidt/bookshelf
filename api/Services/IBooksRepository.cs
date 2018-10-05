using System.Collections.Generic;
using bookshelf.Models;

namespace bookshelf.Services 
{
    public interface IBookRepository
    {
        Book GetById(int id);
        
        IEnumerable<Book> GetBooks(int page, int count);

        int Count();
    }
}
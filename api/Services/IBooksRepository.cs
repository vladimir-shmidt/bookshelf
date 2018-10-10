using System.Collections.Generic;
using System.Threading.Tasks;
using bookshelf.Models;

namespace bookshelf.Services 
{
    public interface IBookRepository
    {
        Task<Book> GetById(int id);
        
        Task<IEnumerable<Book>> GetBooks(int page, int count);

        Task<int> Count();
        Task Update(Book book);
        Task<int> Add(Book book);
        Task Remove(int id);
    }
}
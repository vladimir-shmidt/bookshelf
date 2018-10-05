using bookshelf.Models;

namespace bookshelf.Services 
{
    public interface IBookRepository
    {
        Book GetById(int id);
    }
}
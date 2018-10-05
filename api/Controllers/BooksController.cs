using Microsoft.AspNetCore.Mvc;
using bookshelf.Services;
using System.Threading.Tasks;
using bookshelf.Models;

namespace bookshelf.Controllers
{
    [Route("books")]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository repository;

        public BooksController(IBookRepository repository) 
        {
            this.repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<Book> Get(int id)
        {
            return repository.GetById(id);
        }
    }
}
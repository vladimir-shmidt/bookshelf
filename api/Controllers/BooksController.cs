using Microsoft.AspNetCore.Mvc;
using bookshelf.Services;
using System.Threading.Tasks;
using bookshelf.Models;

namespace bookshelf.Controllers
{
    [Route("books")]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository _repository;

        public BooksController(IBookRepository repository) 
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<Book> Get(int id)
        {
            return _repository.GetById(id);
        }

        [HttpGet("find")]
        public async Task<Paged<Book>> Find([FromQuery]int page, [FromQuery]int count)
        {
            var result = new Paged<Book>();
            result.Data = _repository.GetBooks(page, count);
            result.Total = _repository.Count();
            result.Page = page;
            return result;
        }
    }
}
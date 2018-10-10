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
            return await _repository.GetById(id);
        }

        [HttpPut("{id}/update")]
        public async Task<Book> Update([FromBody]Book book, [FromQuery]int id)
        {
            book.Id = id;
            await _repository.Update(book);
            return book;
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody]Book book)
        {
            return Ok(await _repository.Add(book));
        }

        [HttpGet("find")]
        public async Task<Paged<Book>> Find([FromQuery]int page, [FromQuery]int count)
        {
            var result = new Paged<Book>();
            result.Data = await _repository.GetBooks(page - 1, count);
            result.Total = await _repository.Count();
            result.Page = page - 1;
            return result;
        }

        [HttpDelete("{id}/remove")]
        public async Task<ActionResult> Remove([FromQuery]int id)
        {
            await _repository.Remove(id);
            return Ok();
        }
    }
}
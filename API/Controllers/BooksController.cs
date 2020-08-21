using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository repo;
        public BooksController(IBookRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var books = await repo.GetBooks();
            return Ok(books);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBook(int id)
        {
            var book = await repo.GetBook(id);
            return Ok(book);
        }
    }
}
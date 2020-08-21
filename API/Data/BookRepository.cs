using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class BookRepository : IBookRepository
    {
        private readonly DataContext context;
        public BookRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<Book> GetBook(int id)
        {
            var book = await context.Books.FirstOrDefaultAsync(x => x.Id == id);
            return book;
        }

        public async Task<List<Book>> GetBooks()
        {
            var books = await context.Books.ToListAsync();
            return books;
        }
    }
}
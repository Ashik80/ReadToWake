using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public interface IBookRepository
    {
        Task<List<Book>> GetBooks();
        Task<Book> GetBook(int id);
    }
}
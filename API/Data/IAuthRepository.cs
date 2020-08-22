using System.Threading.Tasks;
using API.Dtos;
using API.Models;

namespace API.Data
{
    public interface IAuthRepository
    {
        Task<User> Login(UserForLogin userForLogin);
        Task<User> Register(UserForRegister userForRegister);
        Task<bool> UserExists(string email);
        string GetToken(User user);
    }
}
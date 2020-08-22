using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository repo;
        public AuthController(IAuthRepository repo)
        {
            this.repo = repo;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLogin userForLogin)
        {
            var user = await repo.Login(userForLogin);

            if (user == null) return Unauthorized();

            var token = repo.GetToken(user);

            return Ok(new
            {
                token = token,
                image = user.Image
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegister userForRegister)
        {
            if (await repo.UserExists(userForRegister.Email))
                return BadRequest($"User {userForRegister.Email} already exist");

            var user = await repo.Register(userForRegister);

            if (user == null) return StatusCode(500, "Problem creating user");

            var token = repo.GetToken(user);

            return Ok(new { token = token });
        }
    }
}
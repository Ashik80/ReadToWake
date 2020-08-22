using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext context;
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        public AuthRepository(DataContext context, SignInManager<User> signInManager, UserManager<User> userManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.context = context;
        }

        public async Task<User> Login(UserForLogin userForLogin)
        {
            var user = await context.Users
                .FirstOrDefaultAsync(x => x.Email == userForLogin.Email);

            if (user == null) return null;

            var result = await signInManager
                .CheckPasswordSignInAsync(user, userForLogin.Password, false);

            if (result.Succeeded) return user;

            return null;
        }

        public async Task<User> Register(UserForRegister userForRegister)
        {
            var user = new User
            {
                DisplayName = userForRegister.DisplayName,
                Email = userForRegister.Email,
                UserName = userForRegister.Email
            };

            var result = await userManager.CreateAsync(user, userForRegister.Password);

            if(result.Succeeded) return user;

            return null;
        }

        public async Task<bool> UserExists(string email)
        {
            return await context.Users.AnyAsync(x => x.Email == email);
        }

        public string GetToken(User user)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("forgiveness is the key"));
            var signingCreds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = signingCreds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
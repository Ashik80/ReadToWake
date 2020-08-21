using Microsoft.AspNetCore.Identity;

namespace API.Models
{
    public class User : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Image { get; set; }
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedDataAsync(DataContext context, UserManager<User> userManager)
        {
            if (!context.Books.Any())
            {
                var bookData = System.IO.File.ReadAllText("./Data/bookData.json");

                var bookList = JsonConvert.DeserializeObject<List<Book>>(bookData);

                context.AddRange(bookList);

                context.SaveChanges();
            }

            if (!context.Users.Any())
            {
                var users = new User[]
                {
                    new User
                    {
                        DisplayName = "Ashik",
                        Email = "ashikurrahman80forget.ar@gmail.com",
                        UserName = "ashikurrahman80forget.ar@gmail.com",
                        Image = "https://images.unsplash.com/photo-1597792694946-85c191c617dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400",
                    },
                    new User
                    {
                        DisplayName = "Pranto",
                        Email = "ragibhossain@gmail.com",
                        UserName = "ragibhossain@gmail.com",
                        Image = "https://images.unsplash.com/photo-1595465100655-7a340977fcb7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=800",
                    }
                };

                foreach(var user in users)
                {
                    await userManager.CreateAsync(user, "Passw0rd");
                }
            }
        }
    }
}
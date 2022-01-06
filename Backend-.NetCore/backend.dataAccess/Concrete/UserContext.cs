using backend.entity;
using Microsoft.EntityFrameworkCore;

namespace backend.dataAccess.Concrete
{
    public class UserContext:DbContext
    {
        public DbSet<User> Users {get;set;} 
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(
                    @"server=localhost;port=3306;database=project;user=root;password=root;"
            );
        }
    }
}
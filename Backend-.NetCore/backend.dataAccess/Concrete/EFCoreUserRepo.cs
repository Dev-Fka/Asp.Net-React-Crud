using System.Collections.Generic;
using System.Linq;
using backend.entity;
using backend.dataAccess.Abstract;
using backend.dataAccess.Concrete;

namespace backend.dataAccess.Concrete
{
    public class EFCoreUserRepo : EFCoreGenericRepo<User, UserContext>, IUserRepo
    {
        public List<User> getByName(string name)
        {
           using (var db=new UserContext())
           {
                return db.Users.Where(i => i.name== name)
                                .ToList();
           }
        }
    }
}
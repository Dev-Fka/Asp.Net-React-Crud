using System.Collections.Generic;
using System.Threading.Tasks;
using backend.entity;

namespace backend.dataAccess.Abstract
{
    public interface IUserRepo:IRepo<User>
    {
        List<User> getByName(string name);
    }
}
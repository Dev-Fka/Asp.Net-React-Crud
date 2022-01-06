using System.Collections.Generic;

using System.Collections.Generic;
using backend.entity;

namespace backend.service.Abstract
{
    public interface IUserService
    {
        List<User> getAll();
        User getById(int id);
        void create (User user);
        void delete (User user);
        void update (User user);
        List<User> getByName(string name);
    }
}
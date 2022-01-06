using System.Collections.Generic;
using backend.dataAccess.Abstract;
using backend.entity;
using backend.service.Abstract;

namespace backend.service.Concrete
{
    public class UserManager:IUserService
    {
        private IUserRepo _userRepo;
        public UserManager(IUserRepo userRepo)
        {
            this._userRepo=userRepo;
        }

        public void create(User user)
        {
            _userRepo.create(user);
        }

        public void delete(User user)
        {
            _userRepo.delete(user);
        }

        public List<User> getAll()
        {
            return _userRepo.getAll();
        }

        public User getById(int id)
        {
            return _userRepo.getById(id);
        }

        public List<User> getByName(string name)
        {
            return _userRepo.getByName(name);
        }

        public void update(User user)
        {
            _userRepo.update(user);
        }
    }
}
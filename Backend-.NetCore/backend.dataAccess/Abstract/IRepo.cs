using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.dataAccess.Abstract
{
    public interface IRepo<T>
    {
        List<T> getAll(); 
        T getById(int id);
        void create(T entity);
        void update(T entity);
        void delete(T entity);
    }
}
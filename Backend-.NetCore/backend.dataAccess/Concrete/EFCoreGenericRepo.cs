using System.Collections.Generic;
using System.Linq;
using backend.dataAccess.Abstract;
using Microsoft.EntityFrameworkCore;

namespace backend.dataAccess.Concrete
{
    public class EFCoreGenericRepo<TEntity, TContext> : IRepo<TEntity>
        where TEntity : class
        where TContext : DbContext, new()
    {
        public void create(TEntity entity)
        {
            using (var db = new TContext())
            {
                db.Set<TEntity>().Add(entity);
                db.SaveChanges();
            }
        }

        public void delete(TEntity entity)
        {
            using (var db = new TContext())
            {
                db.Set<TEntity>().Remove(entity);
                db.SaveChanges();
            }
        }

        public List<TEntity> getAll()
        {
            using (var db = new TContext())
            {
                return db.Set<TEntity>().ToList();
            }
        }

        public TEntity getById(int id)
        {
            using (var db = new TContext())
            {
                return db.Set<TEntity>().Find(id);
            }
        }

        public void update(TEntity entity)
        {
            using (var db = new TContext())
            {
                db.Entry(entity).State = EntityState.Modified;
                db.SaveChanges();
            }
        }


    }
}
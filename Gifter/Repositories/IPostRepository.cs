using Gifter.Models;

namespace Gifter.Repositories
{
    internal interface IPostRepository
    {
        void Add(Post post);
        void Update(Post post);
        void Delete(int id);
        void GetWithComments(int id);
        object GetAll();
        object GetAllWithComments(int id);
        object GetById(int id);
    }
}
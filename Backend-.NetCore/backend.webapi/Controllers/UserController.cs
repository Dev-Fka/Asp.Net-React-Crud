using System.Threading.Tasks;
using backend.entity;
using backend.service.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace backend.webapi.Controllers
{   
    [ApiController]
    [Route("/[Controller]")]
    public class UserController:ControllerBase
    {
        private IUserService service;

        public UserController(IUserService _service)
        {
            this.service=_service;
        }

        [HttpGet]
        public IActionResult getAll(){
            var entities= service.getAll();
            if(entities!=null){
                return Ok(entities);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult createUser(User user){
            service.create(user);
            return Ok(user);
        }

        [HttpPut]
        public IActionResult updateUser(User user){
            service.update(user);
            return Ok(user);
        }

        [HttpGet("/{id}")]
        public IActionResult getOneUser(int id){
            var entities= service.getById(id);
            if(entities!=null){
                return Ok(entities);
            }
            return NotFound();
        }

        [HttpDelete("/{id}")]
        public IActionResult deleteUser(int id){
            var entity=service.getById(id);
            if(entity!=null){
                service.delete(entity);
                return Ok();
            }
            return NotFound();
        }

        [HttpGet("/get/{name}")]
        public IActionResult getByName(string name){
            var entities=service.getByName(name);
            if(entities!=null){
                return Ok(entities);
            }
            return NotFound();
        }
    }
}
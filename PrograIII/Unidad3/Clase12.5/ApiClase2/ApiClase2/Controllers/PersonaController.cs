using ApiClase2.Data;
using ApiClase2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

namespace ApiClase2.Controllers
{
    [ApiController]
    public class PersonaController : ControllerBase
    {
       
        private readonly ContextDB _contexto;
        public PersonaController(ContextDB contexto )
        {
           
            _contexto = contexto;
        }

        [HttpGet]
        [Route("[api/personas/getPersonas]")]
        public async Task<ActionResult<List<Persona>>> GetPersonas()
        {
            var personas = await _contexto.Personas.ToListAsync();
            return Ok(personas);
        }

        [HttpGet]
        [Route("[api/personas/getPersonasById/{id}]")]
        public async Task<ActionResult<List<Persona>>> GetPersonasById(int id) //esto remplazaria el select * from personas
        {
            var personas = await _contexto.Personas.Where(c => c.Id == id).FirstOrDefaultAsync();
            return Ok(personas);
        }
    }
       
    
}
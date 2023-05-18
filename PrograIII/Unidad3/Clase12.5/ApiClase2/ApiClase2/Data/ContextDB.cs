using ApiClase2.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiClase2.Data
{

    public class ContextDB : DbContext
    {
        public ContextDB(DbContextOptions<ContextDB> options) : base(options)
        {
        }
        //ACA SE AGREGAN LAS CLASES DE NUESTRO MODELO COMO PROPIEDADES DE ESTA CLASE
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Categoria> Categorias { get; set; }
    }
}

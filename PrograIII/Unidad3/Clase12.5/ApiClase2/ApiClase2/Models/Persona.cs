using System.ComponentModel.DataAnnotations.Schema;

namespace ApiClase2.Models
{

    [Table("personas")]
    public class Persona
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Apellido { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaModificacion { get; set; }
        public int IdCategoria { get; set; }


        [ForeignKey("IdCategoria")]

        public Categoria Categoria { get; set; }
    }
}

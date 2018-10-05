using System.ComponentModel.DataAnnotations;

namespace bookshelf.Models
{
    public class Author
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set;}

        [Required]
        [StringLength(20)]
        public string Surname { get; set; }
    }
}
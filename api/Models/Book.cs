using System.ComponentModel.DataAnnotations;

namespace bookshelf.Models 
{
    public class Book
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        [StringLength(30)]
        public string Title { get; set; }

        [Required]
        public Author Author { get; set; }

        [Range(0, 10000)]
        public int PageCount { get; set; }

        public string Publisher { get; set; }

        [Range(1800, 2018)]
        public int Year { get; set; }

        [Required]
        [RegularExpression("^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$")]
        public string ISBN { get; set; }

        [Url]
        public string Image { get; set; }
    }
}
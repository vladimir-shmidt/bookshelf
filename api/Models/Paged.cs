using System.Collections;
using System.Collections.Generic;

namespace bookshelf.Models
{
    public class Paged<T>
    {
        public IEnumerable<T> Data { get; set; }

        public int Total { get; set; }
        public int Page { get; set; }
    }
}
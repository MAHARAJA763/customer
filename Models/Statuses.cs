using System;
using System.Collections.Generic;

namespace Task0605.Models
{
    public partial class Statuses
    {
        public Statuses()
        {
            Products = new HashSet<Products>();
        }

        public int StatusId { get; set; }
        public string Status { get; set; }

        public virtual ICollection<Products> Products { get; set; }
    }
}

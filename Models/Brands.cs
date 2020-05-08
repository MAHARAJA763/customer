using System;
using System.Collections.Generic;

namespace Task0605.Models
{
    public partial class Brands
    {
        public Brands()
        {
            Products = new HashSet<Products>();
        }

        public int BrandId { get; set; }
        public string Brand { get; set; }

        public virtual ICollection<Products> Products { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace Task0605.Models
{
    public partial class Products
    {
        public int ProductCode { get; set; }
        public string ProductName { get; set; }
        public int ProductStatus { get; set; }
        public int BrandId { get; set; }

        public virtual Brands Brand { get; set; }
        public virtual Statuses ProductStatusNavigation { get; set; }
    }
}

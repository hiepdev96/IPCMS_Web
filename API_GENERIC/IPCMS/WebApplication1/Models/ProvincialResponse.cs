using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ProvincialResponse : GenericResponse
    {
        public List<Provincial> provincial { set; get; }
    }
    public class Provincial
    {
        public string name { set; get; }
        public string slug { set; get; }
        public string type { set; get; }
        public string name_with_type { set; get; }
        public string code { set; get; }
    }
}
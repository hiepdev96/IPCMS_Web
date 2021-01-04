using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class DistrictResponse: GenericResponse
    {
        public List<District> district { set; get; }
    }
    public class District
    {
        public string name { set; get; }
        public string slug { set; get; }
        public string type { set; get; }
        public string name_with_type { set; get; }
        public string path_with_type { set; get; }
        public string code { set; get; }
        public string parent_code { set; get; }
    }
}
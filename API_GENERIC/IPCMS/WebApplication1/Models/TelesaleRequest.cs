using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class TelesaleRequest
    {
        public string id_profile { set; get; }
        public string status_profile { set; get; }
        public string scope { set; get; }
        public List<Parameter> list_parameter { set; get; }
        public string note { set; get; }
    }
    public class Parameter
    {
        public string block_id { set; get; }
        public string name { set; get; }
        public string value { set; get; }
    }
}
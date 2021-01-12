using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class UserScopeRequest
    {
        public string scope { set; get; }
        public string start_date { set; get; }
        public string exp_date { set; get; }
    }
}
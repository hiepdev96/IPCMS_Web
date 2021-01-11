using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class UserAddScopeRequest
    {
        public string add_user_id { set; get; }
        public string scope { set; get; }
        public string from_date { set; get; }
        public string exp_date { set; get; }
    }
}
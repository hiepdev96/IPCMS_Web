using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class UserUpdateRequest
    {
        public string update_user_id { set; get; }
        public string full_name { set; get; }
        public string origanization { set; get; }
        public string position { set; get; }
        public string phone_number { set; get; }
        public string email { set; get; }
        public string address { set; get; }
        public string note { set; get; }
    }
}
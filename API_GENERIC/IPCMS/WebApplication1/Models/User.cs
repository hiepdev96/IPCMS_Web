using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class User
    {
        public string full_name { set; get; }
        public string user_id { set; get; }
        public string role { set; get; }
        public string status { set; get; }
        public string organization { set; get; }
        public string position { set; get; }
        public string description { set; get; }
        public string phone_number { set; get; }
        public string pass { set; get; }
        public string phone { set; get; }
        public string email { set; get; }
        public string address { set; get; }
        public string create_time { set; get; }
        public string last_time { set; get; }
        public string note { set; get; }
        public List<UserScope> scope { set; get; }
    }
}
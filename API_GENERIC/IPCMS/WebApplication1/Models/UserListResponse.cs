using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class UserListResponse: GenericResponse
    {
        public string current_page { set; get; }
        public List<UserInList> list_user { set; get; }
    }
}
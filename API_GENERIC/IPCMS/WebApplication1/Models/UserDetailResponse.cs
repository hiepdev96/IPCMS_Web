using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class UserDetailResponse: GenericResponse
    {
       public User user { set; get; }
    }
}
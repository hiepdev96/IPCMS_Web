using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class UserNewResponse: GenericResponse
    {
        public string secret_key { set; get; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class DefaultController : ApiController
    {
        [HttpGet]
        public GenericModel GetAll()
        {
            return new GenericModel();
        }
    }
}
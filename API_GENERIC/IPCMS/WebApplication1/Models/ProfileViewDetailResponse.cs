using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ProfileViewDetailResponse : GenericResponse
    {
        public List<BlockField> profile { set; get; }
    }
}
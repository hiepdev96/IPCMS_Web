using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class FilterProfileResponse: GenericResponse
    {

        public List<Profile> list_new_profile { set; get; }
        public List<Profile> list_old_profile { set; get; }
        public int current_page { set; get; }
    }
}
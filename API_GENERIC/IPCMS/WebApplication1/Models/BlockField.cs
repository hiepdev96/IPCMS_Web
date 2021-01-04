using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class BlockField
    {
        public string block_id { set; get; }
        public string block_name { set; get; }
        public string verify_flag { set; get; }
        public string verified { set; get; }
        public List<FileDinhKem> listDoc { set; get; }
        public List<Field> listFields { set; get; }
    }
}
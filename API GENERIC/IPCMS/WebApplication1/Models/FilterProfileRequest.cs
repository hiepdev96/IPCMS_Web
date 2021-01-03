using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class FilterProfileRequest
    {
        public string id_number { set; get; }
        public string full_name { set; get; }
        public string phone_number { set; get; }
        public int? type_of_loan { set; get; }
        public string product_loan { set; get; }
        public int? loan_form { set; get; }
        public int? form_payment { set; get; }
        public int? type_customer { set; get; }
        public string create_from { set; get; }
        public string create_to { set; get; }
        public string classify_cutomer { set; get; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class GenericModel
    {

        public FilterProfileRequest FilterProfileRequest { set; get; }

        public FilterProfileResponse FilterProfileResponse { set; get; }
        public ProvincialResponse ProvincialResponse { set; get; }
        public DistrictResponse DistrictResponse { set; get; }
        public CommunceResponse CommunceResponse { set; get; }
        public ProfileViewDetailResponse ProfileViewDetailResponse { set; get; }
        public ProfileViewDetailRequest ProfileViewDetailRequest { set; get; }
        public TelesaleRequest TelesaleRequest { set; get; }
        public UserNewRequest UserNewRequest { set; get; }
        public UserNewResponse UserNewResponse { set; get; }
        public UserDetailResponse UserDetailResponse { set; get; }
        public UserDisableScopeRequest UserDisableScopeRequest { set; get; }
        public UserUpdateRequest UserUpdateRequest { set; get; }
    }
}
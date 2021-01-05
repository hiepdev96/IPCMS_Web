import { Component, Input, OnInit } from '@angular/core';
import {
  ListCapQuanLy,
  ListGioiTinh,
  ListHinhThucThanhToan,
  ListHinhThucVay,
  ListLichSuTinDung,
  ListLoaiDinhDanh,
  ListLoaiDonViCongTac,
  ListLoaiKhoanVay,
  ListNhaO,
  ListNoXau,
  ListTinhThanhKhoan,
  ListTinhTrangHonNhan,
  ListTrinhDoHocVan
} from 'src/app/common/data';
import { Field, ProfileViewDetailResponse } from 'src/app/common/model/generic-model';
import { SelectionInput } from 'src/app/common/model/selection-input';
import { lstNoXau } from '../form-input-ho-so/form-input-ho-so.component';
import { AlertService } from './../../services/alert.service';

@Component({
  selector: 'app-chi-tiet-ho-so',
  templateUrl: './chi-tiet-ho-so.component.html',
  styleUrls: ['./chi-tiet-ho-so.component.scss']
})
export class ChiTietHoSoComponent implements OnInit {
  isShowUpdate: any;
  isShowCheckbox = false;
  isShowChecked = false;

  @Input() $item: ProfileViewDetailResponse;
  lstField: Field[] = [];
  constructor(
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.$item = ProfileViewDetailResponse.fromJS(a);
    console.log(a);
    this.$item.profile.forEach(x => {
      this.lstField = this.lstField.concat(x.listFields);
    });
    let z = this.lstField.map(x => x.name).sort();
    console.log(z);
  }
  close(): void {
    close();
  }
  showUpdate(isShow: boolean): void {
    this.isShowUpdate = isShow;
  }
  openDialogConfirm(): void {
    this.alertService.confirmMessage('Xác nhận bỏ qua hồ sơ', 'Bạn có chắc chắn muốn bỏ hồ sơ không?');
  }
  getFieldName(name: string): string {
    const res = this.lstField.find(x => x.name === name)?.value;
    if (!res) {
      return '';
    }
    return res;
  }
  getLoaiDinhDanh(value: string): string {
    const res = ListLoaiDinhDanh.find(x => x.value === value)?.name;
    if (!res) {
      return '';
    }
    return res;
  }
  getTinhTrangHonNhan(value: string): string {
    return this.getValueSelectionInput(value, ListTinhTrangHonNhan);
  }
  getTrinhDoHocVan(value: string): string {
    return this.getValueSelectionInput(value, ListTrinhDoHocVan);
  }
  getLoaiDonViCongTac(value: string): string {
    return this.getValueSelectionInput(value, ListLoaiDonViCongTac);
  }
  getCapQuanLy(value: string): string {
    return this.getValueSelectionInput(value, ListCapQuanLy);
  }
  getLichSuTinDung(value: string): string {
    return this.getValueSelectionInput(value, ListLichSuTinDung);
  }
  getNoXau(value: string): string {
    return this.getValueSelectionInput(value, ListNoXau);
  }
  getTinhThanhKhoan(value: string): string {
    return this.getValueSelectionInput(value, ListTinhThanhKhoan);
  }
  getLoaiKhoanVay(value: string): string {
    return this.getValueSelectionInput(value, ListLoaiKhoanVay);
  }
  getHinhThucVay(value: string): string {
    return this.getValueSelectionInput(value, ListHinhThucVay);
  }
  getHinhThucThanhToan(value: string): string {
    return this.getValueSelectionInput(value, ListHinhThucThanhToan);
  }
  getGioiTinh(value: string): string {
    return this.getValueSelectionInput(value, ListGioiTinh);
  }
  getNhaO(value: string): string {
    return this.getValueSelectionInput(value, ListNhaO);
  }
  getValueSelectionInput(value, lst: SelectionInput[]): string {
    const res = lst.find(x => x.value === value)?.name;
    if (!res) {
      return '';
    }
    return res;
  }
  convertToDate(value: string): Date {
    const res = new Date(value + 'Z');
    console.log(res);
    if (res.toString() !== 'Invalid Date') {
      return res;
    }
    return null;
  }
}
export const a = {
  profile: [
    {
      block_id: '1',
      block_name: 'THÔNG TIN ĐỊNH DANH VÀ NHẬN DIỆN KHÁCH HÀNG',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [],
      listFields: [
        {
          name: 'SO_DINH_DANH',
          value: '124324525333',
          verified: 'N'
        },
        {
          name: 'HO_TEN',
          value: 'Hoàng Thế Trọng',
          verified: 'N'
        },
        {
          name: 'QUOC_TICH',
          value: 'VIETNAM',
          verified: 'N'
        },
        {
          name: 'NGAY_SINH',
          value: '1993-10-08 00:00:00.0',
          verified: 'N'
        },
        {
          name: 'GIOI_TINH',
          value: '1',
          verified: 'N'
        },
        {
          name: 'HO_KHAU_THUONG_TRU',
          value: 'Đa Sỹ, Kiến Hưng, Hà Đông, Hà Nội',
          verified: 'N'
        },
        {
          name: 'NGAY_CAP',
          value: '2011-12-23 00:00:00.0',
          verified: 'N'
        },
        {
          name: 'NOI_CAP',
          value: 'Hà Nội',
          verified: 'N'
        },
        {
          name: 'HIEU_LUC_DEN',
          verified: 'N'
        },
        {
          name: 'LOAI_DINH_DANH',
          value: '2',
          verified: 'N'
        }
      ]
    },
    {
      block_id: '2',
      block_name: 'THÔNG TIN LIÊN HỆ',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [],
      listFields: [
        {
          name: 'SO_DIEN_THOAI',
          value: '0977550918',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'SDT_THAM_CHIEU_1',
          value: '0977550913',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'SDT_THAM_CHIEU_2',
          value: '0977550916',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'dia_chi',
          value: 'Đa Sỹ, Kiến Hưng, Hà Đông, Hà Nội',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'EMAIL',
          value: 'trong@gmail.com',
          verified: '',
          verify_flag: 'N'
        }
      ]
    },
    {
      block_id: '3',
      block_name: 'NĂNG LỰC TÀI CHÍNH',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [],
      listFields: [
        {
          name: 'THU_NHAP_THANG',
          value: '12.23',
          verified: 'N',
          verify_flag: 'Y'
        }
      ]
    },
    {
      block_id: '4',
      block_name: 'CHI PHÍ THƯỜNG XUYÊN',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [
        {
          dinh_danh_tai_lieu: '21',
          dinh_danh_ho_so: '201',
          dinh_danh_the_loai: '4',
          nen_tang: 'test',
          thoi_diem_tao: '2020-12-31',
          dia_chi: 'Hà Đông, Hà Nội',
          vi_tri: '20.957850,105.787617',
          ten_thiet_bi: 'device_test',
          ten_file: 'test.pdf'
        },
        {
          dinh_danh_tai_lieu: '22',
          dinh_danh_ho_so: '201',
          dinh_danh_the_loai: '4',
          nen_tang: 'test',
          thoi_diem_tao: '2020-12-31',
          dia_chi: 'Hà Đông, Hà Nội',
          vi_tri: '20.957850,105.787617',
          ten_thiet_bi: 'device_test',
          ten_file: 'test.pdf'
        },
        {
          dinh_danh_tai_lieu: '23',
          dinh_danh_ho_so: '201',
          dinh_danh_the_loai: '4',
          nen_tang: 'test',
          thoi_diem_tao: '2020-12-31',
          dia_chi: 'Hà Đông, Hà Nội',
          vi_tri: '20.957850,105.787617',
          ten_thiet_bi: 'device_test',
          ten_file: 'test.pdf'
        },
        {
          dinh_danh_tai_lieu: '24',
          dinh_danh_ho_so: '201',
          dinh_danh_the_loai: '4',
          nen_tang: 'test',
          thoi_diem_tao: '2020-12-31',
          dia_chi: 'Hà Đông, Hà Nội',
          vi_tri: '20.957850,105.787617',
          ten_thiet_bi: 'device_test',
          ten_file: 'test.pdf'
        }
      ],
      listFields: [
        {
          name: 'NHA_O',
          value: '1',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'SO_HOP_DONG_BAO_HIEM',
          value: '1',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'SO_NGUOI_PHU_THUOC',
          value: '1',
          verified: 'N',
          verify_flag: 'Y'
        }
      ]
    },
    {
      block_id: '5',
      block_name: 'NHÂN KHẨU HỌC',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [],
      listFields: [
        {
          name: 'TINH_TRANG_HON_NHAN',
          value: '1',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'TUOI',
          value: '27',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'GIOI_TINH_HIEN_TAI',
          value: '1',
          verified: 'N',
          verify_flag: 'Y'
        }
      ]
    },
    {
      block_id: '6',
      block_name: 'HỌC VẤN',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [
        {
          dinh_danh_tai_lieu: '30',
          dinh_danh_ho_so: '201',
          dinh_danh_the_loai: '6'
        }
      ],
      listFields: [
        {
          name: 'TRINH_DO_HOC_VAN',
          value: '2',
          verified: 'N',
          verify_flag: 'Y'
        }
      ]
    },
    {
      block_id: '7',
      block_name: 'DANH HIỆU, ĐỊA VỊ XÃ HỘI',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [],
      listFields: [
        {
          name: 'DANH_HIEU',
          value: '0',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'LOAI_DON_VI_CONG_TAC',
          value: '0',
          verified: 'N',
          verify_flag: 'Y'
        },
        {
          name: 'CAP_QUAN_LY',
          value: '0',
          verified: 'N',
          verify_flag: 'Y'
        }
      ]
    },
    {
      block_id: '8',
      block_name: 'HÀNH VI, THÓI QUEN TIÊU DÙNG',
      verify_flag: 'Y',
      verified: 'N',
      listDoc: [],
      listFields: [
        {
          name: 'SO_THE_TIN_DUNG',
          value: '0',
          verified: 'N',
          verify_flag: 'Y'
        }
      ]
    },
    {
      block_id: '9',
      block_name: 'DƯ NỢ TÍN DỤNG',
      listDoc: [],
      listFields: [
        {
          name: 'TONG_DU_NO_TIN_DUNG',
          value: '0',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'LICH_SU_TIN_DUNG',
          value: '1',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'NO_XAU',
          value: '0',
          verified: '',
          verify_flag: 'N'
        }
      ]
    },
    {
      block_id: '10',
      block_name: 'TÀI SẢN ĐẢM BẢO',
      listDoc: [
        {
          dinh_danh_tai_lieu: '32',
          dinh_danh_ho_so: '201',
          dinh_danh_the_loai: '10'
        }
      ],
      listFields: [
        {
          name: 'TONG_GIA_TRI_TAI_SAN_DAM_BAO',
          value: '24.54',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'TINH_THANH_KHOAN',
          value: '2',
          verified: '',
          verify_flag: 'N'
        }
      ]
    },
    {
      block_id: '11',
      block_name: 'THÔNG TIN KHOẢN VAY',
      listDoc: [],
      listFields: [
        {
          name: 'LOAI_KHOAN_VAY',
          value: '0',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'LAI_XUAT',
          value: '6.78',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'MUC_DICH_VAY',
          value: 'vay chơi',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'HINH_THUC_VAY',
          value: '1',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'HINH_THUC_THANH_TOAN',
          value: '1',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'SAN_PHAM_VAY',
          value: 'Vay tiêu dùng',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'SO_TIEN_VAY',
          value: '23.32',
          verified: '',
          verify_flag: 'N'
        },
        {
          name: 'KY_HAN',
          value: '24',
          verified: '',
          verify_flag: 'N'
        }
      ]
    }
  ],
  errorCode: 'OK',
  errorMessage: 'OK',
  role: 'TELESALE'
};

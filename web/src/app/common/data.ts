import { SelectionInput } from './model/selection-input';
import { MappingProfileValue } from './model/mapping-profile-value';
export const ListClassifyCustomer: SelectionInput[] = [
    new SelectionInput({
        name: 'Hồ sơ phân loại khách hàng',
        value: 'Y',
    }),
    new SelectionInput({
        name: 'Hồ sơ không phân loại khách hàng',
        value: 'N',
    })
];
export const ListHinhThucVay: SelectionInput[] = [
    new SelectionInput({
        name: 'Tín chấp',
        value: '0',
    }),
    new SelectionInput({
        name: 'Thế chấp',
        value: '1',
    })
];
export const ListTypeCustomer: SelectionInput[] = [
    new SelectionInput({
        name: 'Khách hàng mới',
        value: 0,
    }),
    new SelectionInput({
        name: 'Khách hàng thân thiết',
        value: 1,
    }),
    new SelectionInput({
        name: 'Khách hàng thường xuyên',
        value: 2,
    }),
    new SelectionInput({
        name: 'Khách hàng VIP',
        value: 3,
    }),
    new SelectionInput({
        name: 'Khách hàng xấu',
        value: 4,
    }),
];
export const ListHinhThucThanhToan: SelectionInput[] = [
    new SelectionInput({
        name: 'Trả góp hàng tháng',
        value: '0',
    }),
    new SelectionInput({
        name: 'Trả 1 lần',
        value: '1',
    }),
];
export const ListLoaiKhoanVay = [
    new SelectionInput({
        name: 'Tiền mặt',
        value: '0',
    }),
    new SelectionInput({
        name: 'Tiêu dùng',
        value: '1',
    }),
    new SelectionInput({
        name: 'Trả góp',
        value: '2',
    }),
    new SelectionInput({
        name: 'Thấu chi',
        value: '3',
    }),
];
export const ListStatusProfile: SelectionInput[] = [
    new SelectionInput({
        name: 'Mới',
        value: '0',
    }),
    new SelectionInput({
        name: 'Đang Telesale',
        value: '1',
    }),
    new SelectionInput({
        name: 'Chốt',
        value: '2',
    }),
    new SelectionInput({
        name: 'Khách hàng từ chối',
        value: '3',
    }),
    new SelectionInput({
        name: 'Hủy',
        value: '4',
    }),
    new SelectionInput({
        name: 'Đang hoàn thiện',
        value: '5',
    }),
    new SelectionInput({
        name: 'Đã hoàn thiện',
        value: '6',
    }),
    new SelectionInput({
        name: 'Lưu trữ',
        value: '7',
    }),
    new SelectionInput({
        name: 'Đã phê duyệt hoàn thiện',
        value: '8',
    }),
    new SelectionInput({
        name: 'Đang thẩm định',
        value: '9',
    }),
    new SelectionInput({
        name: 'Đã thẩm định đạt',
        value: '10',
    }),
    new SelectionInput({
        name: 'Thẩm định không đạt',
        value: '11',
    }),
    new SelectionInput({
        name: 'Đã phê duyệt',
        value: '12',
    }),
    new SelectionInput({
        name: 'Không được phê duyệt',
        value: '13',
    }),
    new SelectionInput({
        name: 'Đã giải ngân',
        value: '14',
    }),
    new SelectionInput({
        name: 'Không giải ngân',
        value: '15',
    }),
    new SelectionInput({
        name: 'Đã tất toán',
        value: '16',
    }),
    new SelectionInput({
        name: 'Nhóm nợ 1',
        value: '17',
    }),
    new SelectionInput({
        name: 'Nhóm nợ 2',
        value: '18',
    }),
    new SelectionInput({
        name: 'Nhóm nợ 3',
        value: '19',
    }),
    new SelectionInput({
        name: 'Nhóm nợ 4',
        value: '20',
    }),
    new SelectionInput({
        name: 'Nhóm nợ 5',
        value: '21',
    }),
];
export const ListLoaiDinhDanh: SelectionInput[] = [
    new SelectionInput({
        name: 'Chứng minh nhân dân (9 SỐ)',
        value: '1',
    }),
    new SelectionInput({
        name: 'Chứng minh nhân dân (12 SỐ)',
        value: '2',
    }),
    new SelectionInput({
        name: 'Căn cước công dân',
        value: '3',
    }),
    new SelectionInput({
        name: 'Hộ chiếu',
        value: '4',
    }),
    new SelectionInput({
        name: 'CMT (CAND)',
        value: '5',
    }),
];
export const ListTinhTrangHonNhan: SelectionInput[] = [
    new SelectionInput({
        name: 'Độc thân',
        value: '0',
    }),
    new SelectionInput({
        name: 'Đã lập gia đình',
        value: '1',
    }),
];
export const ListTrinhDoHocVan: SelectionInput[] = [
    new SelectionInput({
        name: 'Không',
        value: '0',
    }),
    new SelectionInput({
        name: 'Phổng thông trung học',
        value: '1',
    }),
    new SelectionInput({
        name: 'Đại học/Cao đẳng',
        value: '2',
    }),
    new SelectionInput({
        name: 'Cao học',
        value: '3',
    }),
    new SelectionInput({
        name: 'Trên cao học',
        value: '4',
    }),
];
export const ListLoaiDonViCongTac: SelectionInput[] = [

    new SelectionInput({
        name: 'Không',
        value: '0',
    }),
    new SelectionInput({
        name: 'Công chức/Viên chức',
        value: '1',
    }),
    new SelectionInput({
        name: 'Doanh nghiệp nhà nước',
        value: '2',
    }),
    new SelectionInput({
        name: 'Doanh nghiệp FDI',
        value: '3',
    }),
    new SelectionInput({
        name: 'Doanh nghiệp tư nhân',
        value: '4',
    }),
];
export const ListCapQuanLy: SelectionInput[] = [

    new SelectionInput({
        name: 'Không',
        value: '0',
    }),
    new SelectionInput({
        name: 'Nhân viên/Chuyên viên',
        value: '1',
    }),
    new SelectionInput({
        name: 'Trưởng nhóm',
        value: '2',
    }),
    new SelectionInput({
        name: 'Trưởng/Phó phòng/Giám đốc/Phó giám đốc trung tâm',
        value: '3',
    }),
    new SelectionInput({
        name: 'Giám đốc/Phó giám đốc công ty',
        value: '4',
    }),
];
export const ListLichSuTinDung: SelectionInput[] = [

    new SelectionInput({
        name: 'Xấu',
        value: '0',
    }),
    new SelectionInput({
        name: 'Trung bình',
        value: '1',
    }),
    new SelectionInput({
        name: 'Tốt',
        value: '2',
    }),
];
export const ListNoXau: SelectionInput[] = [

    new SelectionInput({
        name: 'Có',
        value: '0',
    }),
    new SelectionInput({
        name: 'Không',
        value: '1',
    }),
];
export const ListTinhThanhKhoan: SelectionInput[] = [

    new SelectionInput({
        name: 'Kém',
        value: '1',
    }),
    new SelectionInput({
        name: 'Trung bình',
        value: '2',
    }),
    new SelectionInput({
        name: 'Tốt',
        value: '3',
    }),
];
export const ListGioiTinh: SelectionInput[] = [

    new SelectionInput({
        name: 'Nữ',
        value: '0',
    }),
    new SelectionInput({
        name: 'Nam',
        value: '1',
    }),
];
export const ListNhaO: SelectionInput[] = [

    new SelectionInput({
        name: 'Nhà riêng',
        value: '0',
    }),
    new SelectionInput({
        name: 'Nhà thuê',
        value: '1',
    }),
];

export const ListMappingProfileValue: MappingProfileValue[] = [
    new MappingProfileValue({
        block_id: 1,
        name: 'LOAI_DINH_DANH',
        nameCtrl: 'loaiDinhDanhCtrl',
        keySelect: 'value',
        type: 'select',
        lstSelect: ListLoaiDinhDanh
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'SO_DINH_DANH',
        nameCtrl: 'soDinhDanhCtrl'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'HO_TEN',
        nameCtrl: 'hoTenCtrl'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'QUOC_TICH',
        nameCtrl: 'quocTichCtrl'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'NGAY_SINH',
        nameCtrl: 'ngaySinhCtrl',
        type: 'date'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'GIOI_TINH',
        nameCtrl: 'gioiTinhCtrl',
        type: 'select',
        keySelect: 'value',
        lstSelect: ListGioiTinh
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'HO_KHAU_THUONG_TRU',
        nameCtrl: 'hoKhauThuongTruCtrl'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'NGAY_CAP',
        nameCtrl: 'ngayCapCtrl',
        type: 'date'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'NOI_CAP',
        nameCtrl: 'noiCapCtrl'
    }),
    new MappingProfileValue({
        block_id: 1,
        name: 'HIEU_LUC_DEN',
        nameCtrl: 'hieuLucDenCtrl',
        type: 'date'
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'SO_DIEN_THOAI',
        nameCtrl: 'soDienThoaiCtrl',
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'SO_DIEN_THOAI',
        nameCtrl: 'soDienThoaiCtrl',
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'SO_DIEN_THOAI',
        nameCtrl: 'soDienThoaiCtrl',
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'SDT_THAM_CHIEU_1',
        nameCtrl: 'soDienThoaiThamChieu1Ctrl',
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'SDT_THAM_CHIEU_2',
        nameCtrl: 'soDienThoaiThamChieu2Ctrl',
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'DIA_CHI',
        nameCtrl: 'diaChiCtrl',
    }),
    new MappingProfileValue({
        block_id: 2,
        name: 'EMAIL',
        nameCtrl: 'emailCtrl',
    }),
    new MappingProfileValue({
        block_id: 3,
        name: 'THU_NHAP_THANG',
        nameCtrl: 'thuNhapThangCtrl',
    }),
    new MappingProfileValue({
        block_id: 4,
        name: 'NHA_O',
        nameCtrl: 'nhaOCtrl',
        type: 'select',
        keySelect: 'value',
        lstSelect: ListNhaO
    }),
    new MappingProfileValue({
        block_id: 4,
        name: 'SO_HOP_DONG_BAO_HIEM',
        nameCtrl: 'soHopDongBaoHiemCtrl',
    }),
    new MappingProfileValue({
        block_id: 4,
        name: 'SO_NGUOI_PHU_THUOC',
        nameCtrl: 'soNguoiPhuThuocCtrl',
    }),
    new MappingProfileValue({
        block_id: 5,
        name: 'TINH_TRANG_HON_NHAN',
        nameCtrl: 'tinhTrangHonNhanCtrl',
        type: 'select',
        keySelect: 'value',
        lstSelect: ListTinhTrangHonNhan
    }),
    new MappingProfileValue({
        block_id: 5,
        name: 'TUOI',
        nameCtrl: 'tuoiCtrl',
    }),
    new MappingProfileValue({
        block_id: 5,
        name: 'GIOI_TINH_HIEN_TAI',
        nameCtrl: 'gioiTinhHienTaiCtrl',
        type: 'select',
        keySelect: 'value',
        lstSelect: ListGioiTinh
    }),
];

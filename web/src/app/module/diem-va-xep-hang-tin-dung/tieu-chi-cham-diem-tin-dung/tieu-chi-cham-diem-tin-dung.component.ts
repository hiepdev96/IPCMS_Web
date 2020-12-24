import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChiTietTieuChiChamDiemTinDungDialogComponent } from './dialog/chi-tiet-tieu-chi-cham-diem-tin-dung-dialog/chi-tiet-tieu-chi-cham-diem-tin-dung-dialog.component';
import { UpdateTieuChiChamDiemTinDungDialogComponent } from './dialog/update-tieu-chi-cham-diem-tin-dung-dialog/update-tieu-chi-cham-diem-tin-dung-dialog.component';

@Component({
  selector: 'app-tieu-chi-cham-diem-tin-dung',
  templateUrl: './tieu-chi-cham-diem-tin-dung.component.html',
  styleUrls: ['./tieu-chi-cham-diem-tin-dung.component.scss']
})
export class TieuChiChamDiemTinDungComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }
  datas = datas;
  ngOnInit(): void {
    // this.openDialogDetail();
  }
  openDialogDetail(item: any): void {
    this.dialog.open(UpdateTieuChiChamDiemTinDungDialogComponent,
      {
        panelClass: 'custom-dialog',
        data: item,
        minWidth: '620px'
      });
  }
}
export const datas = [
  {
    name: 'Thu nhập hàng tháng',
    trongSo: '1',
    status: 'Áp dụng',
    scorings: [
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 1,
        value: '1',
        from_value: '0',
        to_value: 3,
        scoring: 100,
        description: 'triệu đồng',
      },
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 1,
        value: '1',
        from_value: 3,
        to_value: 7,
        scoring: 200,
        description: 'triệu đồng',
      },
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 1,
        value: '1',
        from_value: 7,
        to_value: 12,
        scoring: 300,
        description: 'triệu đồng',
      },
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 1,
        value: '1',
        from_value: 12,
        to_value: 20,
        scoring: 400,
        description: 'triệu đồng',
      },
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 1,
        value: '1',
        from_value: 20,
        to_value: null,
        scoring: 500,
        description: 'triệu đồng',
      }
    ]
  },
  {
    name: 'Nhà ở',
    trongSo: '1',
    status: 'Áp dụng',
    scorings: [
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 0,
        value: 'Nhà thuê',
        from_value: '0',
        to_value: 3,
        scoring: 500,
        description: '',
      },
      {
        scoring_id: '1',
        criteria_id: '1',
        type_criteria: 0,
        value: 'Nhà riêng',
        from_value: '0',
        to_value: 3,
        scoring: 1000,
        description: '',
      }
    ]
  },
  {
    name: 'Hợp đồng bảo hiểm nhân thọ',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Số người phụ thuộc',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Tình trạng hôn nhân',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Độ tuổi',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Giới tính hiện tại',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Trình độ học vấn',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Danh hiệu',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Loại hình đơn vị công tác hiện tại',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Cấp quản lý',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Thanh toán bằng thẻ tín dụng',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Tổng dư nợ tín dụng hiện tại',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Lịch sử tín dụng',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Nợ xấu',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Tổng giá trị đảm bảo',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Tính thanh khoản',
    trongSo: '1',
    status: 'Áp dụng'
  },
  {
    name: 'Loại khách hàng',
    trongSo: '1',
    status: 'Áp dụng'
  },
];

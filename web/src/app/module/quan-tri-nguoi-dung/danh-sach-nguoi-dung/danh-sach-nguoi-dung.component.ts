import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CapNhatPhamViNguoiDungComponent } from '../dialog/cap-nhat-pham-vi-nguoi-dung/cap-nhat-pham-vi-nguoi-dung.component';

@Component({
  selector: 'app-danh-sach-nguoi-dung',
  templateUrl: './danh-sach-nguoi-dung.component.html',
  styleUrls: ['./danh-sach-nguoi-dung.component.scss']
})
export class DanhSachNguoiDungComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['postion', 'hoTen', 'soDienThoai', 'email', 'vaiTro', 'trangThai', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isShowAdvanced: boolean;
  isShowDetail: boolean;

  constructor(

    private dialog: MatDialog
  ) {
    // Create 100 users
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(datas);
  }
  ngOnInit(): void {
    this.openDialogUpdateScope();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  setShowAdvanced(value: boolean): void {
    this.isShowAdvanced = value;
  }
  showDetail(): void {
    this.isShowDetail = true;
  }
  openDialogUpdateScope(): void {
    this.dialog.open(CapNhatPhamViNguoiDungComponent);
  }
}
export const datas = [
  {
    hoTen: 'Tạ Đức Hiệp',
    soDienThoai: '0975290896',
    email: 'hiepdev96@gmail.com',
    vaiTro: 'PARTNER',
    trangThai: 'Hoạt động'
  },
  {
    hoTen: 'Nguyễn Văn A',
    soDienThoai: '01234567852',
    email: 'nguyenvana852@gmail.com',
    vaiTro: 'TELESALE',
    trangThai: 'Đã tạm ngừng'
  },
  {
    hoTen: 'Nguyễn Văn Trung Văn',
    soDienThoai: '09772648532',
    email: 'nguyenvantrungvan532@gmail.com',
    vaiTro: 'SALE',
    trangThai: 'Đã xóa'
  }, {
    hoTen: 'Tạ Đức Hiệp',
    soDienThoai: '0983960527',
    email: 'taduchiep527@gmail.com',
    vaiTro: 'BM',
    trangThai: 'Hoạt động'
  },
  {
    hoTen: 'Nguyễn Văn A',
    soDienThoai: '0951357895',
    email: 'nguyenvana895@gmail.com',
    vaiTro: 'ADMIN',
    trangThai: 'Đã tạm ngừng'
  },
  {
    hoTen: 'Nguyễn Văn Trung Văn',
    soDienThoai: '0951357456',
    email: 'nguyenvantrungvan456@gmail.com',
    vaiTro: 'APPRAISER',
    trangThai: 'Đã xóa'
  }, {
    hoTen: 'Tạ Đức Hiệp',
    soDienThoai: '01286987523',
    email: 'taduchiep523@gmail.com',
    vaiTro: 'MCAS',
    trangThai: 'Đã tạm ngừng'
  },
  {
    hoTen: 'Nguyễn Văn A',
    soDienThoai: '02589453652',
    email: 'nguyenvana652@gmail.com',
    vaiTro: 'RM',
    trangThai: 'Hoạt động'
  },
  {
    hoTen: 'Nguyễn Văn Trung Văn',
    soDienThoai: '0951357456',
    email: 'nguyenvantrungvan456@gmail.com',
    vaiTro: 'MONITOR',
    trangThai: 'Đã xóa'
  }
];


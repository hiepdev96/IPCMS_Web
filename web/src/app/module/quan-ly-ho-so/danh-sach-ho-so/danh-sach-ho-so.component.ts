import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-danh-sach-ho-so',
  templateUrl: './danh-sach-ho-so.component.html',
  styleUrls: ['./danh-sach-ho-so.component.scss']
})
export class DanhSachHoSoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'postion',
    'tenKhachHang',
    'soDienThoai',
    'loaiKhoanVay',
    // 'diemTinDung',
    // 'xepHangTinDung',
    'trangThai',
    'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isShowAdvanced: boolean;

  constructor() {
    // Create 100 users
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(datas);
  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  setShowAdvanced(value: boolean): void {
    this.isShowAdvanced = value;
  }
  showDetail(): void {
    const features =
      'toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,resizable=yes,status=yes,left=0,top=0';
    const page = window.open('./#/chi-tiet-ho-so', '_blank', features);
    // page.onbeforeunload = function () {
    //   console.log('abc');
    // };
  }
}
export const datas = [
  {
    tenKhachHang: 'Tạ Đức Hiệp',
    xepHangTinDung: 'A',
    diemTinDung: '99',
    trangThai: 'Mới',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiền mặt'
  },
  {
    tenKhachHang: 'Nguyễn Văn A',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'Đã chốt',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiêu dùng/ trả góp'
  },
  {
    tenKhachHang: 'Nguyễn Văn Trung Văn',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'ĐÃ HOÀN THIỆN',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thẻ tín dụng'
  }, {
    tenKhachHang: 'Tạ Đức Hiệp',
    xepHangTinDung: 'A',
    diemTinDung: '99',
    trangThai: 'Mới',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thấu chi'
  },
  {
    tenKhachHang: 'Nguyễn Văn A',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'Đã chốt',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thấu chi'
  },
  {
    tenKhachHang: 'Nguyễn Văn Trung Văn',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'ĐÃ HOÀN THIỆN',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiền mặt'
  }, {
    tenKhachHang: 'Tạ Đức Hiệp',
    xepHangTinDung: 'A',
    diemTinDung: '99',
    trangThai: 'Mới',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thẻ tín dụng'
  },
  {
    tenKhachHang: 'Nguyễn Văn A',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'Đã chốt',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiền mặt'
  },
  {
    tenKhachHang: 'Nguyễn Văn Trung Văn',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'ĐÃ HOÀN THIỆN',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiêu dùng/ trả góp'
  }
];


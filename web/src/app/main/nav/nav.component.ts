import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavItem } from '../../common/model/nav-item';
import { roles } from '../../common/constants/role-constants';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navItems = navItems;
  isRender = false;
  @Output() titleNav$ = new EventEmitter<string>();
  @Output() titlesNav$ = new EventEmitter<string[]>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getListTitleRouting(this.route);
    if (!this.isRender) {
      this.isRender = true;
      this.highlightActive();
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        this.getListTitleRouting(this.route);
        this.highlightActive();
      });
    }
  }
  getListTitleRouting(item: ActivatedRoute): void {
    const arr = [];
    let route = item;
    while (route) {
      if (route.snapshot.data && route.snapshot.data.title) {
        arr.push(route.snapshot.data.title);
      }
      route = route.firstChild;
    }
    this.titlesNav$.emit(arr);

  }
  highlightActive(): void {
    let path = location.hash;
    if (path) {
      path = path.replace('#', '');
    }
    let isActived = false;
    this.navItems.forEach(menu => {
      menu.active = false;
      if (menu.routerLink && path === menu.routerLink) {
        if (!isActived) {
          menu.active = true;
          this.titleService.setTitle(`Phần mềm quản lý hồ sơ khách hàng - ${menu.name}`);
          this.titleNav$.emit(menu.name);
          isActived = true;
        }
      }
    });
  }
  getRouting(url): string[] {
    return [url];
  }
  checkShow(item: NavItem): boolean {
    if (item.roles && item.roles.length > 0) {
      return item.roles.includes(this.authService.getRole());
    }

    return true;
  }
}
const navItems: NavItem[] = [
  {
    isTitle: true,
    name: 'TÀI KHOẢN'
  },
  {
    name: 'Thông tin cá nhân',
    title: 'Thông tin cá nhân',
    routerLink: '/quan-tri-nguoi-dung/thong-tin-ca-nhan',
    icon: 'fas fa-th-list'
  },
  {
    isTitle: true,
    name: 'QUẢN LÝ HỒ SƠ'
  },
  // {
  //   name: 'Tạo hồ sơ',
  //   title: 'Tạo hồ sơ',
  //   routerLink: '/ql-ho-so/tao-ho-so',
  //   icon: 'fas fa-file',
  //   active: true
  // },
  {
    name: 'Lọc hồ sơ',
    title: 'Lọc hồ sơ',
    routerLink: '/ql-ho-so/loc-ho-so',
    icon: 'fas fa-th-list'
  },
  {
    name: 'NGƯỜI DÙNG',
    isTitle: true,
    roles: [roles.ADMIN, roles.BM, roles.MONITOR],
  },
  {
    name: 'Quản lý người dùng',
    title: 'Quản lý người dùng',
    roles: [roles.ADMIN, roles.BM, roles.MONITOR],
    routerLink: '/quan-tri-nguoi-dung/quan-ly-nguoi-dung',
    icon: 'fas fa-user-plus'
  },
  // {
  //   name: 'Danh sách người dùng',
  //   title: 'Danh sách người dùng',
  //   routerLink: '/quan-tri-nguoi-dung/danh-sach-nguoi-dung',
  //   icon: 'fas fa-user-friends'
  // },
  // {
  //   name: 'Lịch sử hoạt động',
  //   title: 'Lịch sử hoạt động',
  //   routerLink: '/quan-tri-nguoi-dung/lich-su-hoat-dong',
  //   icon: 'fas fa-history'
  // },
  // {
  //   name: 'ĐIỂM VÀ XẾP HẠNG TÍN DỤNG',
  //   icon: 'icon-trophy',
  //   isTitle: true,
  // },
  // {
  //   name: 'Tiêu chí chấm điểm tín dụng',
  //   routerLink: '/diem-va-xep-hang-tin-dung/tieu-chi-cham-diem-tin-dung',
  //   icon: 'fas fa-balance-scale'
  // },
  // {
  //   name: 'Hạng tín dụng',
  //   routerLink: '/diem-va-xep-hang-tin-dung/hang-tin-dung',
  //   icon: 'fas fa-award'
  // },
  // {
  //   name: 'Backtest',
  //   routerLink: '/diem-va-xep-hang-tin-dung/back-test',
  //   icon: 'fas fa-cash-register'
  // },
  // {
  //   name: 'BÁO CÁO THỐNG KÊ',
  //   isTitle: true,
  // },
  // {
  //   name: 'Số lượng hồ sơ',
  //   title: 'Báo cáo số lượng hồ sơ',
  //   routerLink: '/bao-cao/so-luong-ho-so',
  //   icon: 'fas fa-chart-bar'
  // }, {
  //   name: 'SL hồ sơ theo khu vực địa lý',
  //   title: 'Báo cáo SL hồ sơ theo theo khu vực địa lý',
  //   routerLink: '/bao-cao/khu-vuc-dia-ly',
  //   icon: 'fas fa-map'
  // },
  // {
  //   name: 'Số lượng hồ sơ theo thời gian',
  //   title: 'Báo cáo số lượng hồ sơ theo thời gian',
  //   routerLink: '/bao-cao/phan-bo-theo-thoi-gian',
  //   icon: 'fas fa-clock'
  // },
  // {
  //   name: 'Người dùng theo trạng thái',
  //   routerLink: '/bao-cao/nguoi-dung-theo-trang-thai',
  //   icon: 'fas fa-chart-bar'
  // },
  // {
  //   name: 'Người dùng theo khu vực địa lý',
  //   routerLink: '/bao-cao/nguoi-dung-theo-khu-vuc-dia-ly',
  //   icon: 'fas fa-map'
  // },
  // {
  //   name: 'Lịch sử hoạt động người dùng',
  //   routerLink: '/bao-cao/lich-su-nguoi-dung',
  //   icon: 'fas fa-history'
  // }
];

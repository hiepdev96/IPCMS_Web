import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../common/model/nav-item';
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
    private titleService: Title
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
    console.log(arr);
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
}
const navItems: NavItem[] = [
  {
    isTitle: true,
    name: 'QUẢN LÝ HỒ SƠ'
  },
  {
    name: 'Tạo hồ sơ',
    routerLink: '/ql-ho-so/tao-ho-so',
    icon: 'fas fa-file',
    active: true
  },
  {
    name: 'Danh sách hồ sơ',
    routerLink: '/ql-ho-so/danh-sach-ho-so',
    icon: 'fas fa-th-list'
  },
  // {
  //   name: 'QUẢN TRỊ HỆ THỐNG',
  //   isTitle: true
  // }, {
  //   name: 'Tùy chỉnh hệ thống',
  //   routerLink: '/tao-ho-so',
  //   icon: 'fas fa-cogs'
  // },
  // {
  //   name: 'Lịch sử sao lưu',
  //   routerLink: '/base',
  //   icon: 'fas fa-history'
  // },
  {
    name: 'QUẢN TRỊ NGƯỜI DÙNG',
    isTitle: true,
  },
  {
    name: 'Tạo người dùng',
    routerLink: '/quan-tri-nguoi-dung/tao-nguoi-dung',
    icon: 'fas fa-user-plus'
  },
  {
    name: 'Danh sách người dùng',
    routerLink: '/quan-tri-nguoi-dung/danh-sach-nguoi-dung',
    icon: 'fas fa-user-friends'
  },
  {
    name: 'Lịch sử hoạt động',
    routerLink: '/quan-tri-nguoi-dung/lich-su-hoat-dong',
    icon: 'fas fa-history'
  },
  {
    name: 'ĐIỂM VÀ XẾP HẠNG TÍN DỤNG',
    icon: 'icon-trophy',
    isTitle: true,
  },
  {
    name: 'Tùy chỉnh tiêu chí',
    routerLink: '/base/cc',
    icon: 'fas fa-balance-scale'
  },
  {
    name: 'Tùy chỉnh điểm tín dụng',
    routerLink: '/base/cards',
    icon: 'fas fa-award'
  },
  {
    name: 'Backtest',
    routerLink: '/base/backtest',
    icon: 'fas fa-cash-register'
  },
  {
    name: 'BÁO CÁO THỐNG KÊ',
    isTitle: true,
  },
  {
    name: 'Số lượng hồ sơ',
    routerLink: '/base/backtest',
    icon: 'fas fa-chart-bar'
  },
  {
    name: 'Trạng thái xử lý hồ sơ',
    routerLink: '/base/backtest',
    icon: 'fas fa-chart-pie'
  },
  {
    name: 'Hồ sơ theo khu vực địa lý',
    routerLink: '/base/backtest',
    icon: 'fas fa-map'
  },
  {
    name: 'Hồ sơ theo thời gian',
    routerLink: '/base/backtest',
    icon: 'fas fa-clock'
  },
  {
    name: 'Số lượng người dùng',
    routerLink: '/base/backtest',
    icon: 'fas fa-chart-bar'
  },
  {
    name: 'Người dùng theo khu vực địa lý',
    routerLink: '/base/backtest',
    icon: 'fas fa-map'
  },
  {
    name: 'Lịch sử hoạt động người dùng',
    routerLink: '/base/backtest',
    icon: 'fas fa-history'
  }
];

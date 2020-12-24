export class NavItem {
    public isTitle?: boolean;
    public name?: string;
    public title?: string;
    public icon?: string;
    public routerLink?: string;
    public roles?: number[];
    public active?: boolean;
    public children?: NavItem[];
    public constructor(data?: INavItem) {
        this.isTitle = data?.isTitle;
        this.name = data?.name;
        this.icon = data?.icon;
        this.routerLink = data?.routerLink;
        this.roles = data?.roles;
        this.children = data?.children;
        this.active = data?.active;
        this.title = data?.title;
    }
}
export interface INavItem {
    isTitle?: boolean;
    name?: string;
    icon?: string;
    routerLink?: string;
    roles?: number[];
    active?: boolean;
    children?: NavItem[];
    title?: string;
}

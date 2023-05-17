import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { LOGO, ROUTES } from 'src/app/utils/constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  navbarFixed: boolean = false
  LOGO: string = LOGO;
  NAV_CLASS = 'w-full text-gray-300 cursor-pointer items-center mt-2';
  ACTIVE_ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu is-active';
  ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu';

  routes = ROUTES;
  sideBar: any = null;
  openSidebar: any = null;
  closeSidebar: any = null;
  menu: any = null;
  activeSubMenu: any = null;
  flag: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY > 64){
      this.navbarFixed = true
      // document.getElementsByClassName('header')[0].classList.add('shadow');
    }else{
      this.navbarFixed = false
      // document.getElementsByClassName('header')[0].classList.add('remove-shadow');

    }
  }

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.sideBar = document.getElementById("mobile-nav");
    this.openSidebar = document.getElementById("openSideBar");
    this.closeSidebar = document.getElementById("closeSideBar");
    this.menu = document.querySelector(".mobile-menu");
  }

  sidebarHandler = (flag: boolean) => {
    this.flag = flag;
    if (flag) {
      this.sideBar.style.transform = "translateX(0px)";
      this.openSidebar.classList.add("hidden");
      this.closeSidebar.classList.remove("hidden");
      this.menu.classList.add("hidden");
    } else {
      this.sideBar.style.transform = "translateX(-260px)";
      this.closeSidebar.classList.add("hidden");
      this.openSidebar.classList.remove("hidden");
    }

    if (this.sideBar !== null && !this.flag) {
      this.sideBar.style.transform = "translateX(-260px)";
    }
  };

  handleMenu = () => {
    this.menu.classList.toggle("hidden");
    this.sidebarHandler(false);
  };
}

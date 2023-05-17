import {
  Component,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { LOGO, ROUTES } from 'src/app/utils/constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  navbarFixed: boolean = false;
  LOGO: string = LOGO;
  NAV_CLASS = 'w-full text-gray-300 cursor-pointer items-center mt-2';
  ACTIVE_ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu is-active';
  ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu';

  routes = ROUTES;
  guests: number = 4;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 64) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  add() {
    this.guests = this.guests + 1;
  }

  remove() {
    this.guests = this.guests === 0 ? 0 : this.guests - 1;
  }
}

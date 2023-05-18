import {
  Component,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { FRAMER, LOGO, ROUTES } from 'src/app/utils/constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  navbarFixed: boolean = false;
  LOGO: string = LOGO;
  FRAMER: string = FRAMER;
  NAV_CLASS = 'w-full text-gray-300 cursor-pointer items-center mt-2';
  ACTIVE_ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu is-active';
  ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu';

  routes = ROUTES;
  guests: number = 4;
  isVisible: boolean = false;

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

  showModal(): void {
    if (this.isVisible) {
      this.updateStyle();
    }
    this.isVisible = !this.isVisible;
  }

  handleOk(): void {
    if (this.isVisible) {
      this.updateStyle();
    }
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.updateStyle();
    this.isVisible = false;
  }

  updateStyle(): void {
    var element = document.querySelector('.ant-modal-wrap');
    element!.classList.remove('slide-in-from-right');
    element!.classList.add('slide-out-from-right');
  }
}

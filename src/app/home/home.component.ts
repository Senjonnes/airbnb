import { Component, OnInit } from '@angular/core';
import { Frame } from '../models/frame.model';
import { FRAMES } from '../utils/constant';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  frames: Frame[] = FRAMES;
  frame?: Frame = new Frame();
  isVisible: boolean = false;
  formFixed: boolean = false;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  open(id: any) {
    this.frame = this.frames.find((f) => f.id === id);
    this.showModal();
  }

  showModal(): void {
    if (this.isVisible) {
      this.updateStyle();
    }
    this.formFixed = false;
    this.toggleClass();
    this.isVisible = !this.isVisible;
  }

  handleOk(): void {
    if (this.isVisible) {
      this.updateStyle();
    }
    this.formFixed = false;
    this.toggleClass();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.formFixed = false;
    this.updateStyle();
    this.toggleClass();
    this.isVisible = false;
  }

  updateStyle(): void {
    var element = document.querySelector('.ant-modal-wrap');
    element!.classList.remove('slide-in-from-right');
    element!.classList.add('slide-out-from-right');
  }

  toggleClass(): void {
    const topNavBar = document.getElementById('top-nav-bar');
    const bottomNavBar = document.getElementById('bottom-nav-bar');
    if (!this.isVisible) {
      topNavBar?.classList.remove('z-[10000]');
      bottomNavBar?.classList.remove('z-[10000]');
    } else {
      topNavBar?.classList.add('z-[10000]');
      bottomNavBar?.classList.add('z-[10000]');
    }
  }

  onScroll(e: any) {
    const scrollY = e.target.scrollTop;
    if (scrollY > 555) {
      this.formFixed = true;
    } else {
      this.formFixed = false;
    }
  }
}

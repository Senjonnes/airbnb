import { Component } from '@angular/core';
import { Frame } from '../models/frame.model';
import { FRAMES } from '../utils/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  frames: Frame[] = FRAMES;
}

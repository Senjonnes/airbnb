import { Component, Input, OnInit } from '@angular/core';
import { Frame } from 'src/app/models/frame.model';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
  @Input() frame!: Frame;
  constructor() {}

  ngOnInit(): void {}
}

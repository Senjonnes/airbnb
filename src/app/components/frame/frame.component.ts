import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Frame } from 'src/app/models/frame.model';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
  @Input() frame!: Frame;
  @Output() openFrame: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  open(id: number): void {
    this.openFrame.emit(id);
  }
}

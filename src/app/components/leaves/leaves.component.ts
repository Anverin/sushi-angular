import {Component, Input} from '@angular/core';
import {LeavesType} from "../../../types/leaves.type";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
  animations: [
    trigger('moveLeaves', [
      state('top', style({transform: 'translateY(-20px)'})),
      state('bottom', style({transform: 'translateY(0)'})),
      transition('top => bottom', animate(Math.ceil(Math.random() * 4 + 1) + 's linear')),
      transition('bottom => top', animate(Math.ceil(Math.random() * 4 + 1) + 's linear'))
    ]),
  ]
})
export class LeavesComponent {

  @Input() leaf: LeavesType = {} as LeavesType;

  stateLeaves: string = 'top';

  constructor() {
  }

  movingLeaves() {
    setTimeout(() => {
      if (this.stateLeaves === "top") {
        this.stateLeaves = "bottom"
      } else {
        this.stateLeaves = "top"
      }
    }, Math.random() * 1000)
  }

}

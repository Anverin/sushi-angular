import {Component, ElementRef, ViewChild} from '@angular/core';
import {LeavesType} from "../../../types/leaves.type";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('headerMenu', {static: true}) private headerMenu!: ElementRef<HTMLElement>;

  public leavesHeader: LeavesType = {
    img: "leaves1.png",
    cls: "leaves1"
  }

constructor() {
  }

  openAdaptiveMenu(): void {
    if (this.headerMenu) {
      this.headerMenu.nativeElement.classList.add('open');
    }
  }

  closeAdaptiveMenu(): void {
    if (this.headerMenu) {
      this.headerMenu.nativeElement.classList.remove('open')
    }
  }

}

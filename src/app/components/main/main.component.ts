import {AfterViewInit, Component} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {OwlOptions} from "ngx-owl-carousel-o";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {LeavesType} from "../../../types/leaves.type";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    // анимация требует вызова функции в ngAfterViewInit либо по клику
    // trigger('fadeIn', [
    //   state('invisible', style({
    //     opacity: 0
    //   })),
    //   state('visible', style({
    //     opacity: 1
    //   })),
    //   transition('invisible => visible', animate(3000)),
    //   transition('visible => invisible', animate(3000)),
    // ]),

    //запуск анимации без вызова функции и без передачи состояния в html (только триггер указать)
    trigger('fadeIn', [
      transition('* => *', [
        animate(3000, keyframes([
          style({opacity: 0}),
          style({opacity: 1})
        ]))
      ])
    ]),

    trigger('moveBlock', [
      transition('* => *', [
        animate(1000, keyframes([
          style({transform: 'translateX(-100px)'}),
          style({transform: 'translateX(0)'})
        ]))
      ])
    ]),

    trigger('moveLeaves', [
      state('top', style({transform: 'translateY(-20px)'})),
      state('bottom', style({transform: 'translateY(0)'})),
      transition('top => bottom', animate('4s linear')),
      transition('bottom => top', animate('4s linear'))
    ]),


    trigger('heartBeat', [
      state('small', style({transform: 'scale(0.8)'})),
      state('middle1', style({transform: 'scale(1.1)'})),
      state('middle2', style({transform: 'scale(0.9)'})),
      state('big', style({transform: 'scale(1.1)'})),
      transition('small => middle1', animate('1s linear')),
      transition('middle1 => middle2', animate('0.5s linear')),
      transition('middle2 => big', animate('0.5s linear')),
      transition('big => small', animate('1s linear')),
    ]),
  ]
})

export class MainComponent implements AfterViewInit {

  public leavesMain: LeavesType[] = [
    {
      img: "leaves2.png",
      cls: "leaves2"
    },
    {
      img: "leaves3.png",
      cls: "leaves3"
    },
    {
      img: "leaves4.png",
      cls: "leaves4"
    },
    {
      img: "leaves5.png",
      cls: "leaves5"
    }
  ];
  public leavesAdvantages: LeavesType[] = [
    {
      img: "leaves6.png",
      cls: "leaves6"
    },
    {
      img: "leaves7.png",
      cls: "leaves7"
    },
    {
      img: "leaves8.png",
      cls: "leaves8"
    },
    {
      img: "leaves9.png",
      cls: "leaves9"
    }
  ];
  public leavesOrder: LeavesType[] = [
    {
      img: "leaves10.png",
      cls: "leaves10"
    },
    {
      img: "leaves11.png",
      cls: "leaves11"
    },
    {
      img: "leaves12.png",
      cls: "leaves12"
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  public products = [
    {
      image: 'sushi1.png',
      title: 'Суши Нигири с угрем',
      composition: 'Кунжут, нори, рис, соус терияки, угорь',
      mass: 34,
      price: 3.5,
    },
    {
      image: 'sushi2.png',
      title: 'Суши Нигири с лососем',
      composition: 'Кунжут, нори, рис, соус терияки, угорь',
      mass: 32,
      price: 4.2,
    },
    {
      image: 'sushi3.png',
      title: 'Нигири с окунем опаленным',
      composition: 'Морской окунь опаленный, майонез, орех кешью',
      mass: 35,
      price: 4.8,
    },
    {
      image: 'sushi4.png',
      title: 'Терияки хотто маки',
      composition: 'Рис, форель в соусе терияки, темпура, творожный сыр, базилик, нори, лимон',
      mass: 43,
      price: 3.5,
    },
    {
      image: 'sushi5.png',
      title: 'Дабл Фиш Фреш ролл',
      composition: 'Рис, форель свежая, форель слабосолёная, творожный сыр, японский майонез, нори',
      mass: 35,
      price: 3.2,
    },
    {
      image: 'sushi6.png',
      title: 'Бонито Ролл',
      composition: 'Лосось, авокадо, сыр сливочный, стружка тунца, рис, нори',
      mass: 40,
      price: 3.8,
    }
  ]
  public products2: ProductType[] = [];
  public products3: ProductType[] = [];
  public products4: ProductType[] = [];


  constructor() {
    this.products2 = Array.from(this.products).sort(() => Math.random() - 0.5);
    this.products3 = Array.from(this.products).sort(() => Math.random() - 0.5);
    this.products4 = Array.from(this.products).sort(() => Math.random() - 0.5);
  }



  //анимация изображения в первом блоке
  visibility: string = 'invisible';

  fadeInMainImage(): void {
    this.visibility = 'visible';
  }

  // fadeOutMainImage(): void {
  //   this.visibility = 'invisible';
  // }

  ngAfterViewInit() {
    // this.fadeInMainImage();
  }

  public formValues = {
    name: '',
    phone: '',
    productTitle: '',
  }

  addToCart(productTitle: string): void {
    this.scrollTo('order');
    this.formValues.productTitle = productTitle.toUpperCase();
  }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  stateHeartBeat: string = 'small';
}



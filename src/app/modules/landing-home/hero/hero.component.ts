import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  web=false;
  mobile=true;
  onResize(event) {
    this.web = document.body.clientWidth<=768?true:false
    this.mobile = document.body.clientWidth>=768?true:false
  }
  constructor() {
  }

  // tslint:disable-next-line:typedef
  onPricesButtonClick() {
    const element = document.getElementById('pricing');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

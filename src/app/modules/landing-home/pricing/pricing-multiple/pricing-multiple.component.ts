import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pricing-multiple',
  templateUrl: './pricing-multiple.component.html',
  styleUrls: ['./pricing-multiple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PricingMultipleComponent {
  web=false;
  mobile=true;
  onResize(event) {
    this.web = document.body.clientWidth<=768?true:false
    this.mobile = document.body.clientWidth>=768?true:false
  }
  constructor() {
  }
}

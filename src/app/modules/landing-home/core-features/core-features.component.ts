import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-core-features',
  templateUrl: './core-features.component.html',
  styleUrls: ['./core-features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoreFeaturesComponent {

  constructor() {
  }
}

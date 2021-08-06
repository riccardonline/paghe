import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const modules = [
  // Empty
  EmptyLayoutModule
];

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    MatIconModule,
    HttpClientModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class LayoutModule {
}

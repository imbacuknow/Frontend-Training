import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserLayoutRoutingModule} from './user-layout-routing.module';
import {UserLayoutComponent} from './user-layout/user-layout.component';
import { HeaderComponent } from './component/header/header.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [UserLayoutComponent, HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule, UserLayoutRoutingModule],
})
export class UserLayoutModule {}

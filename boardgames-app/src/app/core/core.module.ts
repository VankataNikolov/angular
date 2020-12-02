import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    RouterModule,
    UserModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }

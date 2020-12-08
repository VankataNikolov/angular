import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list/link-list.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LinkListComponent],
  imports: [
    CommonModule,
    MatListModule,
    SharedModule
  ]
})
export class LinksModule { }

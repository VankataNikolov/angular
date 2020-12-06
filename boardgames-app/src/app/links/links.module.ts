import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list/link-list.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [LinkListComponent],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class LinksModule { }

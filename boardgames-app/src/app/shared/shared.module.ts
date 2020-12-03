import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authServiceProvider } from './auth.service';
import { LoaderComponent } from './loader/loader.component';
import { CheckImgPipe } from './check-img.pipe';


@NgModule({
  declarations: [LoaderComponent, CheckImgPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    CheckImgPipe
  ],
  providers: [
    authServiceProvider
  ]
})
export class SharedModule { }

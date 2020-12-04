import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authServiceProvider } from './auth.service';
import { LoaderComponent } from './loader/loader.component';
import { CheckImgPipe } from './check-img.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { CountDownPipe } from './count-down.pipe';


@NgModule({
  declarations: [LoaderComponent, CheckImgPipe, NotFoundComponent, CountDownPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    CheckImgPipe,
    CountDownPipe
  ],
  providers: [
    authServiceProvider
  ]
})
export class SharedModule { }

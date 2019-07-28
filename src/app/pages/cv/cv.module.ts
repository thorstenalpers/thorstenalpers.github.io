import { NgModule } from '@angular/core';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv.routing.module';

@NgModule({
  imports: [
    CvRoutingModule
  ],
  declarations: [
    CvComponent
  ]
})
export class CvModule { }

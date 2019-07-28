import { NgModule } from '@angular/core';
import { DisclaimerComponent } from './disclaimer.component';
import { DisclaimerRoutingModule } from './disclaimer.routing.module';

@NgModule({
  imports: [
    DisclaimerRoutingModule
  ],
  declarations: [
    DisclaimerComponent
  ]
})
export class DisclaimerModule { }

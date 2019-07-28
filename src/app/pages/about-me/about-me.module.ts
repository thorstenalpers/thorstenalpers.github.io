import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me.routing.module';

@NgModule({
  imports: [
    AboutMeRoutingModule
  ],
  declarations: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }

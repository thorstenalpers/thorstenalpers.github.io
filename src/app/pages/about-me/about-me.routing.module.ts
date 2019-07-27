import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',  component: AboutMeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AboutMeRoutingModule { }

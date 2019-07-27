import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from './services/skills.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SkillsService
  ],
  declarations: []
})
export class CoreModule { }

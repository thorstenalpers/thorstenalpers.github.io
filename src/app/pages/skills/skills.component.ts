import { OnInit, Component } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';
import { SkillsService } from 'src/app/core/services/skills.service';

@Component({
  selector: 'app-skills',
  styleUrls: ['./skills.component.scss'],
  templateUrl: './skills.component.html',
  providers: [SkillsService]

})

export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(
    private skillsService: SkillsService) { }

  ngOnInit() {
    this.skills = this.skillsService.getAll();
  }
}

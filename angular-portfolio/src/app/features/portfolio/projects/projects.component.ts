import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/portfolio.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<IProject> = [
    {
      title: 'Project One',
      image: './assets/project-1.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/',
    },
    {
      title: 'Project Two',
      image: './assets/project-2.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/',
    },
    {
      title: 'Project Three',
      image: './assets/project-3.png',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}

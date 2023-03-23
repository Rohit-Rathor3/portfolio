import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'E-Commerce web application',
      technologies: 'Angular15, HTML,CSS,TypeScript,JSON-server.',
      description: [
        'This is simple e-commerce web application.',
        'Here, seller and user both can use this web app to list and purchase things.',
        'After some enhancements, this web app can be updated into commerical use.'
      ],
    },
    {
    title: 'Human Resource Mangement System',
    technologies: ' Java, Servlet,JSP,Mysql,HTML,CSS,JS,BootStrap.',
    description: [
      'This project can be used to manage employess of an organization.',
      'Basic management of employess like attendence, payrole system , announcements can be handled easily.',
    ],
  }
    
  ];
  constructor() {}

  ngOnInit(): void {}
}

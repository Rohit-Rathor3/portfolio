import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 95,
    },
    {
      name: 'Spring & Spring Boot',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'Angular 15',
      level: 'Intermediate',
      rating: 85,
    },
    {
      name: 'Oracle , MySQL, MongoDB',
      level: 'Basic',
      rating: 65,
    },
    {
      name: 'DSA , Programming Fundamentals',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Restful web Services, Os',
      level: 'Basic',
      rating: 50,
    }

  ];
  constructor() {}

  ngOnInit(): void {}
}

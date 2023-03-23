import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      institute: 'Naresh IT , Hyderabaad',
      course:'Java Full Stack Development',
      duration: 'July 2022 - April 2023',
      description: [
        'Having good knowledge of Java programming.',
        'Industrial experince of software developent.',
        'Good knowledge of various java technologies and frameworks.'
      ],
    },
    {
      institute: 'WSCubeTech, Jodhpur',
      course:'Data structures and algorithms',
      duration: 'Jan. 2022 - April 2022',
      description: [
        'Good understanding of various data structures.',
        'Confident to design basic algorithms.'
      ]
       },
    {
      institute: 'TAP Academy, Banglore',
      course:'FrontEnd Technolgies',
      duration: 'Feb. 2022 - April 2022',
      description: [
        'Hands on practice on web designing.',
        'Sound knowledge on development of Web applications.',
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Rohit Rathor'],
    ['Father Name', 'Trivesh Rathor'],
    ['DOB', '10/04/2002'],
    ['Education', 'B.Tech(Computer Science & Engineering)'],
    ['Hobbies','Coding,Cooking']
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer having good knowledge of software development and programming fundamentals.',
    'Having hands on knowledge on web development and designing.',
    'Good in Java Programming language.',
    'Has the motivation to take independent responsibility as well as ability to contribute and be a productive team player.'
  ];

  constructor() {}

  ngOnInit(): void {}
}

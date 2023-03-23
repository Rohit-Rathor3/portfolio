import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "ShriRam Group Of Colleges, (RGPV).",
      course: 'B.Tech(Computer Science & Engineering)',
      duration: '2019-2023',
      score: '8.48 CGPA',
    },
    {
      institute: 'Vaish Sr. Sec. School (BSEH)',
      course: '10+2 (HSC)',
      duration: '2018-2019',
      score: '84.2',
    },
    {
      institute: 'Vaish Sr. Sec. School (BSEH)',
      course: '10(SSC)',
      duration: '2017-2018',
      score: '86.8%',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

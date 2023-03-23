import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css'],
})
export class BanerComponent implements OnInit {
  welcomeFlag:boolean=true;
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  
  ngOnInit(): void {
    setTimeout(() => {
      this.welcomeFlag=false;
    }, 7000);
  }


}

import { Component, OnInit } from '@angular/core';
// import { solutions } from 'src/assets/mock/Solutions';
// import { ISolutions } from 'src/assets/mock/Solutions';

// fonts
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  // solutions: ISolutions = new solutions();

  // ! fix: unable to console log or uses data values
  // solutionIcon = solutions.icon;
  // fonts
  coffee = faCoffee;

  ngOnInit(): void {
    // console.log(this.solutions.icon);
  }
}

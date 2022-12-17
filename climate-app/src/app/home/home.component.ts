import { Component, OnInit } from '@angular/core';
// import { solutions } from 'src/assets/mock/Solutions';
// import { ISolutions } from 'src/assets/mock/Solutions';

// fonts
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';
import { faHouseTsunami } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  // fonts
  phone = faPhoneSquare;
  cloudSun = faCloudSun;
  tree = faTree;
  bolt = faBolt;
  bioHazard = faBiohazard;
  flood = faHouseTsunami;
  earth = faEarthAfrica;
  database = faDatabase;
  // phone = faPhone;
  //
  upArrow = faArrowUp;
  ngOnInit(): void {
    // console.log(this.solutions.icon);
  }
}

import { Component, OnInit } from '@angular/core';
import { RegionService } from '../service/region.service';
import { Region, IRegion } from 'src/assets/mock/regionData';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  constructor(private regionService: RegionService) {}
  cloudSun = faCloudSun;
  regions: IRegion[] = [];

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion() {
    this.regionService
      .getAllRegions()
      .subscribe((reg) => (this.regions = reg.slice(0, 8)));
    console.log(this.regions);
  }
}

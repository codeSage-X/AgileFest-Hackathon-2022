import { Component, OnInit } from '@angular/core';
import { RegionService } from '../service/region.service';
import { Region, IRegion } from 'src/assets/mock/regionData';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  constructor(private regionService: RegionService) {}
  regions: IRegion[] = [];

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion() {
    this.regionService
      .getAllRegions()
      .subscribe((reg) => (this.regions = reg.slice(1, 5)));
    console.log(this.regions);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RegionService } from '../service/region.service';
import { IRegion } from 'src/assets/mock/regionData';
@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.scss'],
})
export class RegionDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private regionService: RegionService,
    private location: Location
  ) {}

  region!: IRegion;
  ngOnInit(): void {
    this.getRegion();
  }

  getRegion() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.regionService
      .getRegion(id)
      .subscribe((region: IRegion) => (this.region = region));
  }

  goBack() {
    this.location.back();
  }
}

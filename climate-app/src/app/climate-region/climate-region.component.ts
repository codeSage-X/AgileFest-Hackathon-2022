import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HEROES } from 'src/assets/mock/mockRegionData';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-climate-region',
  templateUrl: './climate-region.component.html',
  styleUrls: ['./climate-region.component.scss'],
})
export class ClimateRegionComponent implements OnInit {
  constructor() {}
  // data = userData;
  heroes = HEROES;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.heroes);
  // dataSource = this.heroes

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {}
}

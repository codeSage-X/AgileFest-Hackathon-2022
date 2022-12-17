import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IRegion } from 'src/assets/mock/regionData';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.scss'],
})
export class SearchCompComponent implements OnInit {
  region$!: Observable<IRegion[]>;
  private searchTerms = new Subject<string>();

  constructor(private regionService: RegionService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.region$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.regionService.searchRegion(term))
    );
  }
}

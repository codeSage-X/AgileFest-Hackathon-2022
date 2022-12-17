import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Region, IRegion } from 'src/assets/mock/regionData';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  region$: IRegion[] = [];

  getAllRegions(): Observable<IRegion[]> {
    return this.http.get<IRegion[]>(this.baseUrl + 'region').pipe(
      map((res) => {
        this.region$ = res;
        return res;
      })
    );
  }

  getRegion(id: number): Observable<IRegion> {
    return this.http.get<IRegion>(this.baseUrl + 'region/' + id);
  }

  searchRegion(reg: string) {
    if (!reg.trim()) {
      return of([]);
    }
    return this.http.get<IRegion[]>(`${this.baseUrl}name=${reg}`).pipe(
      tap((x) =>
        // ! fix fetch response error
        x.length
          ? console.log('found region' + reg)
          : console.error('no region found')
      )
    );
  }
  private log(message: string) {
    console.log(message);
  }
}

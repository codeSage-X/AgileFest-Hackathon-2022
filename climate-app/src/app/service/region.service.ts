import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
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
    // .pipe
    // tap(_ => this.log(`fetched region id=${id}`)
    // )
    // ();
  }

  private log(message: string) {
    console.log(message);
  }
}

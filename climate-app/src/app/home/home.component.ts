import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { solutions } from 'src/assets/mock/Solutions';
import { ISolutions } from 'src/assets/mock/Solutions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  solutions: ISolutions[] = solutions;

  ngOnInit(): void {
    console.log(this.solutions);
  }
}

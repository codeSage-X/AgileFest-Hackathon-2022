import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  menu = faBars;
  close = faXmark;
  showMenu$ = false;
  ngOnInit(): void {}

  showMenu() {
    this.showMenu$ = !this.showMenu$;
  }
}

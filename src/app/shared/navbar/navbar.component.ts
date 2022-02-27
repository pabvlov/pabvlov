import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  lugar: String = 'inicio'

  navbar(donde: String) {
    this.lugar = donde;
    this.scroller.scrollToAnchor(this.lugar.toString())
  }

  ngOnInit(): void {
  }

}

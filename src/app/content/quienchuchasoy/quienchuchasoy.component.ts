import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-aboutme',
  templateUrl: './quienchuchasoy.component.html',
  styleUrls: ['./quienchuchasoy.component.css']
})
export class AboutmeComponent implements OnInit{

  @ViewChild('container') container!: ElementRef;
  innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }


  constructor() { }

  fechaNacimiento = moment([2000, 7, 7]);
  fechaActual = moment();
  chip = 0;
  anios = this.fechaActual.diff(this.fechaNacimiento, 'years')
}

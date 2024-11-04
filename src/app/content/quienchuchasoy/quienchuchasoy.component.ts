import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-aboutme',
  templateUrl: './quienchuchasoy.component.html',
  styleUrls: ['./quienchuchasoy.component.css']
})
export class AboutmeComponent {

  @ViewChild('container') container!: ElementRef;

  constructor() { }

  fechaNacimiento = moment([2000, 7, 7]);
  fechaActual = moment();
  chip = 0;
  anios = this.fechaActual.diff(this.fechaNacimiento, 'years')
}

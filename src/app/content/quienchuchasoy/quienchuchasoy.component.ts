import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-quienchuchasoy',
  templateUrl: './quienchuchasoy.component.html',
  styleUrls: ['./quienchuchasoy.component.css']
})
export class QuienchuchasoyComponent implements OnInit {

  constructor() { }

  fechaNacimiento = moment([2000, 7, 7]);
  fechaActual = moment([2022, 2, 26]);
  anios = this.fechaActual.diff(this.fechaNacimiento, 'years')

  ngOnInit(): void {
    console.log('holaa');
    
    
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-aboutme',
  templateUrl: './quienchuchasoy.component.html',
  styleUrls: ['./quienchuchasoy.component.css']
})
export class AboutmeComponent implements OnInit, AfterViewInit {

  @ViewChild('container') container!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.posX = this.getRandomInt(this.container.nativeElement.offsetWidth);
    this.posY = this.getRandomInt(this.container.nativeElement.offsetHeight);
    this.rotation = this.getRandomRotation();
    setTimeout(() => {
      this.newPos();
    }, 2000);
  }

  fechaNacimiento = moment([2000, 7, 7]);
  fechaActual = moment();
  height = 0;
  anios = this.fechaActual.diff(this.fechaNacimiento, 'years')
  posX: number = 0;
  posY: number = 0;
  rotation = this.getRandomRotation();
  poligon = this.getRandomTriagle();

  ngOnInit(): void {
    

  }

  newPos() {
    this.height = this.getRandomInt(this.container.nativeElement.offsetWidth)
    this.posX = this.getRandomInt(this.container.nativeElement.offsetWidth);
    this.posY = this.getRandomInt(this.container.nativeElement.offsetHeight);
    this.rotation = this.getRandomRotation();
    this.poligon = this.getRandomTriagle();
    setTimeout(() => {
      this.newPos();
    }, 2000);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRandomRotation() {
      return Math.floor(Math.random() * 360);
    
  }

  getRandomTriagle() {
    const triangles = ['polygon(6% 4%, 86% 8%, 100% 50%, 75% 100%, 11% 68%)', 
                      'polygon(6% 4%, 42% 84%, 95% 76%, 73% 97%, 80% 41%)', 
                      'polygon(27% 53%, 55% 0, 79% 53%, 100% 100%, 0% 100%)',
                      'polygon(30% 78%, 100% 26%, 0 0, 100% 100%, 0% 100%)',
                      'polygon(100% 100%, 0 0, 100% 0, 50% 51%, 0% 100%)']
    return triangles[Math.floor(Math.random() * triangles.length)];

  }

}

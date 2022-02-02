import { WeatherInfo } from './../../models/weather.models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  //Preparar el Output
  @Output() sendName = new EventEmitter<string>()
  public city: string = ''

  constructor() { }

  ngOnInit(): void {

  }



  submitLocation() {
   // Emitir un output que recoja el padre
   this.sendName.emit(this.city)

   this.city = ''
  }

}

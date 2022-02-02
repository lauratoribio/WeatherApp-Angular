import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfo } from '../../models/weather.models';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() weather: WeatherInfo

  constructor() { }

  ngOnInit(): void {
    
  }

}

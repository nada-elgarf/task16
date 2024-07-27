import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/weather';
import { WeatherService } from '../weather.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')])
    ])
  ]
})
export class WeatherSearchComponent implements OnInit {
  city: string = '';
  weatherData: Weather | null = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  searchWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'City not found!';
        this.weatherData = null;
      }
    );
  }

}

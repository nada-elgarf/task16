import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://api.weatherapi.com/v1/current.json';
  private apiKey = '8d881f6b7072400ca21181505242707';

  constructor(private http:HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?key=${this.apiKey}&q=${city}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../shared/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent implements OnInit {
  main: any;
  weatherData?: WeatherData;
  cityName!: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(cityName: string) {
    this.getWeatherData(cityName).subscribe({
      next: (response: WeatherData) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.API_URL + 'weather?q=' + cityName + '&appid=' + environment.API_KEY);

  }
}

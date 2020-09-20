import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }


    getWeatherByCity(long:any,lat:any)
    {
       return this.http.get('api.openweathermap.org/data/2.5/weather?q=salt lake city&appid=c35e85f983a3798f1a348ede82b12341').
    }
    


}

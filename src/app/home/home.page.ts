import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
myDate = ''
date= "2013-12-15T13:47:20.789"
location= "Lagos"
temperature="20"
key="c93c471b3eba2331c405a8f50663fe01"
description=""
icon=""
hide= false

constructor(private http: HttpClient){
  this.getCurrentWeather()
}

getCurrentWeather(){
  this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.location+'&APPID='+this.key+'&units=metric').subscribe((response) => {
    console.log(response['main']);
    this.temperature = response['main']['temp']
    this.description = response['weather'][0]['main']
    this.icon = "http://openweathermap.org/img/w/"+response['weather'][0]['icon']+".png"
})

}
}

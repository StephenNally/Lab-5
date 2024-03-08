import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.httpClient.get('https://www.jsonblob.com/api/1215633014561562624')
  }

  GetWeatherData():Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }
}




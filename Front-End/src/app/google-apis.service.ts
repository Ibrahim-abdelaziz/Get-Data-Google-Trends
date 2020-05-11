import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApisService {

  constructor(private http: HttpClient) {
    
   }
   
  getGoogleTrendsRegion(){
    return this.http.get("http://127.0.0.1:8000/api/google-region");      
}

  getGoogleTrendsDate(){
    return this.http.get("http://127.0.0.1:8000/api/google-date/");
}

}

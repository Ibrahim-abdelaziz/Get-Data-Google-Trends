import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../data';  
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-google-trends-date',
  templateUrl: './google-trends-date.component.html',
  styleUrls: ['./google-trends-date.component.css']
})
export class GoogleTrendsDateComponent implements OnInit {

  result : any = []
  results : any = []

  data: Data[];  
  timestamp = [];
  search_values = [];
  response = [];  
  Linecharts = [];

  constructor(private apiService: GoogleApisService,private _activatedRoute: ActivatedRoute, private router:Router) { 
  }
  ngOnInit(): void {
    this.getGoogleTrendsDate();
    
  }

  getGoogleTrendsDate() {
    this.apiService.getGoogleTrendsDate().subscribe((result:any) => {
      this.result = result;
     result.map(obj =>{
      this.timestamp.push(obj.timestamp)
      this.search_values.push(obj.search_values)
      this.response.push(obj.response)
     })
    
      console.log(result);
      console.log("timestamp",this.timestamp);
      console.log("search_values",this.search_values);
      console.log("response",this.response);

  },err =>{},
  ()=>{this.Linecharts = new Chart('canvas', {  
    type: 'line',  
    data: {  
      labels: this.timestamp,  
      
      datasets: [  
        {  
          data: this.search_values,
          borderColor: '#3cb371',  
          backgroundColor: "#0000FF",  
        } ,
        {
          data: this.response,  
          borderColor: '#9999',  
          backgroundColor: "#0000FF",
        } 
      ]  
    },  
    options: {  
      legend: {  
        display: false  
      },  
      scales: {  
        xAxes: [{  
          display: true  
        }],  
        yAxes: [{  
          display: true  
        }],  
      }  
    }  
  }); }
  )
}

}





  




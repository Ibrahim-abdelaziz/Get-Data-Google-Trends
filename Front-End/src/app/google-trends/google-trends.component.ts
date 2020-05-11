import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../data';  
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-google-trends',
  templateUrl: './google-trends.component.html',
  styleUrls: ['./google-trends.component.css']
})
export class GoogleTrendsComponent implements OnInit {
  result : any = []
  results : any = []

  data: Data[];  
  country_name = [];  
  search_count = [];
  timestamp = [];
  search_values = [];
  response = [];  
  Linechart = [];
  Linecharts = [];

  constructor(private apiService: GoogleApisService,private _activatedRoute: ActivatedRoute, private router:Router) { 
    
  }
  ngOnInit(): void {
    this.getGoogleTrendsRegion();
    this.getGoogleTrendsDate();
    
    
    console.log("welcome", this.Linechart)
  }

  
  getGoogleTrendsRegion() {
    console.log("welcome")
    this.apiService.getGoogleTrendsRegion().subscribe((result:any) => {
        this.result = result;
       result.map(obj =>{
        this.country_name.push(obj.country_name)
        this.search_count.push(obj.search_count)
       })
      
        console.log(result);
        console.log("country_name",this.country_name);
        console.log("search_count",this.search_count);

    },err =>{},
    ()=>{this.Linechart = new Chart('canvas', {  
      type: 'line',  
      data: {  
        labels: this.country_name,  
        
        datasets: [  
          {  
            data: this.search_count,  
            borderColor: '#3cb371',  
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





  




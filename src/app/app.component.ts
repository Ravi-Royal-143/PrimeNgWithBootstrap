import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic';

  constructor(private http:HttpClient) { 
    let a: any[] = [];
    for(let i =0; i <= 10; i++) {
      this.http.get(`https://courses.decodedfrontend.io/api/course_player/v2/lessons/${i}`).subscribe(data => {
        if(data) {
          console.log('inside')
        }
      })
    }
    console.log(a)
  }
}

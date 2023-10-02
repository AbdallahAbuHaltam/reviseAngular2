import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskTwo';
  username:string='';
  isEmpty=false;


  onReset(){
    this.username="";
    this.isEmpty=true
  }

}

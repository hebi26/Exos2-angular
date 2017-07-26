import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
changeinput = ["text", "submit", "number", "color"];
type : string;
i : number = 0;
number : number = 0;
username: string;
color : string= "aqua";
name: string;
on: boolean = false;
color2 : string;
clicked : boolean = false;
textcolor : string = "red";

changeclick(){
    this.type = this.changeinput[this.i];
    this.i++;
    if (this.i == this.changeinput.length ){
      this.i =0;
    }
}
  more(){
  this.number++;
  }
  less(){
    this.number--;
  }

 changecolor (newcolor){
    this.color=newcolor;
 }

change(){
    this.clicked = !this.clicked;
     if (this.clicked){
         this.textcolor = "Green";
     }
     else{
         this.textcolor = "Red";
     }
}
}


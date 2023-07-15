import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{

  win:any = []
  lose:any = []
  winWas:any = []

  dayNumb:number = 7
  winID:number = 0
  go:number = 0
  toggle:boolean = false

  ngOnInit(): void {
    
  }

  getConsole() {
    let go = Math.abs(Math.floor(Math.random() * (Math.ceil(1) - Math.floor(10) + 1)) + 1)

    if (this.win.length === 0) {
      if (go === this.dayNumb) {
        
          this.toggle = true
          this.winID = this.lose.length+1
          this.win.push(go)

      } else {
          this.lose.push(go)
      }
    } else {
          this.winWas.push(go)
          this.lose.push(go)
          this.toggle = false
    }   
  }
}

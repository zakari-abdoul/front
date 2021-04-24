import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/services/custom/custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private custonService : CustomService ) { }

  ngOnInit(): void {
    this.custonService.getStats().subscribe(res => {
      //this.data = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}

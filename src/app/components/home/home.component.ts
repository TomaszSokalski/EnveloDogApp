import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogList : any;
  randomDog : any;
  dogName : any;
  load !: boolean;

  constructor(private api : ApiService ) {}

  ngOnInit(): void {
    this.load = false;
    this.api.getData().subscribe((res:any) => {
    this.dogList = res.message;
  })
}

getRandomdDog(dog:any){
  this.load = true;
  this.api.getDog(dog).subscribe((res:any) => { 
    this.randomDog = res.message;
    this.dogName = dog
  })
}
}

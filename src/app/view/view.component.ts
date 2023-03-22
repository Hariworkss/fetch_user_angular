import { Component, OnInit } from '@angular/core';
import { MyUser } from 'src/model/myUser';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  allUsers:MyUser[]=[]
  constructor(private api:ApiService){}

  ngOnInit(): void{
    this.api.getallUser().subscribe((data:any)=>{
      console.log(data)
      this.allUsers=data
    })
  }
}

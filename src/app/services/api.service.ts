import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MyUser} from 'src/model/myUser'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string='https://jsonplaceholder.typicode.com/posts'

  getallUser():Observable<MyUser>{
    return this.http.get(this.baseUrl)
  }


}

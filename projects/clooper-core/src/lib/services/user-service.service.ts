import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

const api =  'https://fake-api-endpoint.clooper.com'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(api)
  }
}

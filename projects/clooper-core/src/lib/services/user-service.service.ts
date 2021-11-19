import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private api: string =  'https://fake-api-endpoint.clooper.com'
private url: string =  'https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }
}

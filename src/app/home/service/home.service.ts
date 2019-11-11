import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private customerApiUrl = 'customers';
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://reqres.in/api/users?page=1';

  getUsersData() {
    return this.http.get(this.baseUrl);
  }


}

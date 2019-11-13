import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private customerApiUrl = 'customers';
  constructor(private http: HttpClient) { }
  listUrl: string = 'http://dummy.restapiexample.com/api/v1/employees';
  deleteUrl = 'http://dummy.restapiexample.com/api/v1/delete/';
  
  // get user details
  getUsersData() {
    return this.http.get(this.listUrl);
  }

  deleteUserData(id): Observable<any> {
    console.log('sdklsd', id);
    const url = `${this.deleteUrl}${id}`;
    return this.http.delete(url).pipe(map(response => {
      return response;
    }))
  }

  createUser(user): Observable<any> {
    return this.http.post(this.listUrl, user);
  }


}

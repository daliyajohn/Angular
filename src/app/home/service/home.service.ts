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
  createUserUrl = 'http://dummy.restapiexample.com/api/v1/create';

  // get user details
  getUsersData() {
    return this.http.get(this.listUrl);
  }

  // delete user
  deleteUserData(id): Observable<any> {
    const url = `${this.deleteUrl}${id}`;
    return this.http.delete(url).pipe(map(response => {
      return response;
    }))
  }

  // create user
  createUser(user): Observable<any> {
    return this.http.post(this.createUserUrl, user);
  }


}

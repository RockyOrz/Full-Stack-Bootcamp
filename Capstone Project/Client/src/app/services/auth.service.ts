import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  signIn(data: object): Observable<any> {
    let result = this.http.post(this.api_url + '/auth/login', data);
    result.subscribe((session: any) => {
      sessionStorage.setItem(
        'user_id',
        JSON.stringify(session.user_id)
      );
      sessionStorage.setItem(
        'sessionToken',
        JSON.stringify(session.session_id)
      );
      sessionStorage.setItem(
        'sessionEndDate',
        JSON.stringify(session.session_expiry_date)
      );
      sessionStorage.setItem('isLoggedIn', 'true');
    });
    return result;
  }

  register(data: object): Observable<any> {
    return this.http.post(this.api_url + '/auth/register', data);
  }
}

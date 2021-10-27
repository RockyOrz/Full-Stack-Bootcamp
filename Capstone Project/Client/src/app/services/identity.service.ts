import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private api_url = environment.api_url;

  constructor(private http: HttpClient) { }

  check_employer(id: number): Observable<any>{
    return this.http.get(this.api_url + `/identity/employer/${id}`);
  }

  check_applicant(id: number): Observable<any>{
    return this.http.get(this.api_url + `/identity/applicant/${id}`);
  }

  register_as_applicant(id: number): Observable<any> {
    return this.http.post(this.api_url + '/identity/applicant', {applicant_id: id});
  }

  register_as_employer(id: number): Observable<any> {
    return this.http.post(this.api_url + '/identity/employer', {employer_id: id});
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private api_url = environment.api_url;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {}

  create_header(): void {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      session_id: JSON.parse(sessionStorage.getItem('sessionToken') || ''),
    });
  }

  get_application(id: number): Observable<any> {
    this.create_header();
    return this.http.get(this.api_url + `/application/employer/${id}`, {
      headers: this.headers,
    });
  }

  create_application(application: Object): Observable<any> {
    this.create_header();
    return this.http.post(this.api_url + `/application`, application, {
      headers: this.headers,
    });
  }

  find_application(job_id: number, applicant_id: number): Observable<any> {
    this.create_header();
    return this.http.get(
      this.api_url + `/application/${job_id}/${applicant_id}`,
      { headers: this.headers }
    );
  }
}

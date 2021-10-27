import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  private api_url = environment.api_url;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {}

  private create_header(): void {
    this.headers = new HttpHeaders({
      session_id: JSON.parse(sessionStorage.getItem('sessionToken') || ''),
    });
  }

  update_applicant(id: number, data: Object): Observable<any> {
    this.create_header();
    return this.http.post(this.api_url + `/applicant/update/${id}`, data, {
      headers: this.headers,
    });
  }

  get_applicant(id: number): Observable<any> {
    this.create_header();
    return this.http.get(this.api_url + `/applicant/${id}`, {
      headers: this.headers,
    });
  }

  get_resume(name: string): Observable<any> {
    this.create_header();
    const options = {
      headers: this.headers,
      responseType: 'blob' as 'json',
    };
    return this.http.get<Blob>(
      this.api_url + `/applicant/download/${name}`,
      options
    );
  }
}

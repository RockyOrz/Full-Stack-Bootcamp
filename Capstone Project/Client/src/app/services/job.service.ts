import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private api_url = environment.api_url;
  private headers = new HttpHeaders;

  constructor(private http: HttpClient) { }

  private create_header(): void {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'session_id': JSON.parse(sessionStorage.getItem('sessionToken') || '')
    });
  }

  get_jobs(): Observable<any> {
    this.create_header();
    return this.http.get(this.api_url + '/jobs', {headers: this.headers});
  }

  get_post_jobs(employer_id: number): Observable<any> {
    this.create_header();
    return this.http.get(this.api_url + `/jobs/employer/${employer_id}`, {headers: this.headers});
  }

  delete_job(id: number): Observable<any> {
    this.create_header();
    return this.http.delete(this.api_url + `/jobs/${id}`, {headers: this.headers});
  }

  update_job(job_id:number, job: Object): Observable<any> {
    this.create_header();
    return this.http.put(this.api_url + `/jobs/${job_id}`,  job, {headers: this.headers});
  }

  post_job(job: Object): Observable<any> {
    this.create_header();
    return this.http.post(this.api_url + '/jobs', job, {headers: this.headers});
  }
}

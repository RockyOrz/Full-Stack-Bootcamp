import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/Idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors: Doctor[] = [
    { name: 'Andy Shaw', specialization: 'General Medicine'},
    { name: 'Andy Shaw', specialization: 'Psychology'},
    { name: 'Andy Shaw', specialization: 'surgeon'},

  ];

  constructor() { }

  getNumberOfDoctors(): number { return this.doctors.length }
}

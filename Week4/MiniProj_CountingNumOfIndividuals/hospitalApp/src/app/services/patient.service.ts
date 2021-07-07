import { Injectable } from '@angular/core';
import { Patient } from '../interfaces/Ipatient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Patient[] = [
    {name: 'John Wick', illness: 'Cancer'},
    {name: 'John Wick', illness: 'Flu'},
    {name: 'John Wick', illness: 'Depression'},
    {name: 'John Wick', illness: 'Cold'},
    {name: 'John Wick', illness: 'hypertension'},
  ]

  constructor() { }

  getNumberOfPatients(): number { return this.patients.length }
}

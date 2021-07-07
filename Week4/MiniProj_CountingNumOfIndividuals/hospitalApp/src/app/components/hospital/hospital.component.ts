import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Idoctor';
import { Patient } from 'src/app/interfaces/Ipatient';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  doctors:Doctor[];
  patients:Patient[];
  numOfDoctors:number;
  numOfPatients:number;
  

  constructor(private doctorService: DoctorService, private patientService: PatientService) {
    this.doctors = doctorService.doctors;
    this.patients = patientService.patients;
    this.numOfDoctors = doctorService.getNumberOfDoctors();
    this.numOfPatients = patientService.getNumberOfPatients();
  }

  ngOnInit(): void {
  }

}

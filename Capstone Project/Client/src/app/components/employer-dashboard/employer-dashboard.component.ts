import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iapplicant } from 'src/app/interfaces/Iapplicant';
import { IJob } from 'src/app/interfaces/Ijob';
import { ApplicantService } from 'src/app/services/applicant.service';
import { ApplicationService } from 'src/app/services/application.service';
import { JobService } from 'src/app/services/job.service';
import { IApplication } from '../../interfaces/Iapplication';
import { saveAs } from 'file-saver';
import { data } from 'jquery';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss'],
})
export class EmployerDashboardComponent implements OnInit {
  job_detail!: IJob;
  show_job_detail: boolean = false;
  applications: Array<IApplication> = [];
  jobs: Array<IJob> = [];
  all_jobs_applicants_list: { [job_id: number]: number[] } = {};
  current_job_applicants: Array<Iapplicant> = [];
  employer_id: number = 0;

  showed_jobs: Array<IJob> = [];

  number_of_jobs_show_in_one_page: number = 4;

  first_page: boolean = true;
  last_page: boolean = false;
  current_page_number: number = 1;
  total_page_number: number = 0;

  page_iterations: Array<number> = [];

  constructor(
    private applicationService: ApplicationService,
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private applicantService: ApplicantService
  ) {}

  job_update_form = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    location: ['', [Validators.required]],
    company_name: ['', [Validators.required]],
  });

  job_post_form = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    location: ['', [Validators.required]],
    company_name: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.employer_id = parseInt(sessionStorage.getItem('user_id') || '');

    //Get all posted jobs
    this.jobService.get_post_jobs(this.employer_id).subscribe((jobs) => {
      this.jobs = jobs;

      this.applicationService
        .get_application(this.employer_id)
        .subscribe((applications) => {
          this.applications = applications;

          // make a list to look for applicants for each posted job
          for (let application of this.applications) {
            if (
              this.all_jobs_applicants_list.hasOwnProperty(application.job_id)
            ) {
              this.all_jobs_applicants_list[application.job_id].push(
                application.applicant_id
              );
            } else {
              Object.defineProperty(
                this.all_jobs_applicants_list,
                application.job_id,
                {
                  value: [application.applicant_id],
                }
              );
            }
          }

          // get and show jobs and make pagination
          this.activatedRoute.queryParams.subscribe((params) => {
            this.current_page_number = parseInt(params['page']);

            this.total_page_number = Math.ceil(
              this.jobs.length / this.number_of_jobs_show_in_one_page
            );

            this.page_iterations = [];
            for (let i = 1; i <= this.total_page_number; i++) {
              this.page_iterations.push(i);
            }

            this.first_page = this.current_page_number == 1 ? true : false;
            this.last_page =
              this.current_page_number == this.page_iterations.length
                ? true
                : false;

            this.showed_jobs = this.jobs.slice(
              this.number_of_jobs_show_in_one_page *
                (this.current_page_number - 1),
              this.number_of_jobs_show_in_one_page * this.current_page_number
            );
          });
        });
    });
  }

  show_detail(job: IJob): void {
    this.job_detail = job;
    this.show_job_detail = true;
  }

  get_brief_description(description: string): string {
    return description.substr(0, 250) + '...';
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  change_to_previous_page() {
    this.show_job_detail = false;
    this.router.navigate(['/employer-dashboard'], {
      queryParams: { page: (this.current_page_number - 1).toString() },
    });
  }

  change_to_next_page() {
    this.show_job_detail = false;
    this.router.navigate(['/employer-dashboard'], {
      queryParams: { page: (this.current_page_number + 1).toString() },
    });
  }

  change_page(page_number: number) {
    this.show_job_detail = false;
    this.router.navigate(['/employer-dashboard'], {
      queryParams: { page: page_number.toString() },
    });
  }

  delete_job(id: number): void {
    this.show_job_detail = false;
    this.jobService.delete_job(id).subscribe(() => {
      window.location.reload();
    });
  }

  update_job() {
    let data = this.job_update_form.value;
    this.jobService.update_job(this.job_detail.job_id, data).subscribe(() => {
      window.location.reload();
    });
  }

  post_job() {
    let data = { employer_id: this.employer_id };
    data = { ...data, ...this.job_post_form.value };

    this.jobService.post_job(data).subscribe(() => {
      window.location.reload();
    });
  }

  get_job_applicants() {
    this.current_job_applicants = [];
    let current_applicants_list =
      this.all_jobs_applicants_list[this.job_detail.job_id];

    for (let applicant_id of current_applicants_list) {
      this.applicantService
        .get_applicant(applicant_id)
        .subscribe((applicant) => {
          this.current_job_applicants.push(applicant);
        });
    }
  }

  download_resume(name: string) {
    this.applicantService.get_resume(name).subscribe((resume) => {
      saveAs(resume, name);
    });
  }

  get_days_between(date: Date) {
    let now = new Date().getTime();
    return Math.floor((now - new Date(date).getTime()) / (1000 * 3600 * 24));
  }
}

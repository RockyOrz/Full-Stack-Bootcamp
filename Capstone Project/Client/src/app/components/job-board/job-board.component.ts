import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iapplicant } from '../../interfaces/Iapplicant';
import { ApplicantService } from 'src/app/services/applicant.service';
import { ApplicationService } from 'src/app/services/application.service';
import { JobService } from 'src/app/services/job.service';
import { IJob } from '../../interfaces/Ijob';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss'],
})
export class JobBoardComponent implements OnInit {
  applicant!: Iapplicant;
  applicant_id: number = 0;

  job_detail!: IJob;

  show_job_detail: boolean = false;

  jobs: Array<IJob> = [];
  showed_jobs: Array<IJob> = [];

  number_of_jobs_show_in_one_page: number = 4;

  first_page: boolean = true;
  last_page: boolean = false;
  current_page_number: number = 1;
  total_page_number: number = 0;

  page_iterations: Array<number> = [];

  @ViewChild('aply_success') aply_success: any;
  @ViewChild('aply_duplicate') aply_duplicate: any;
  @ViewChild('apply_form') apply_form: any;

  constructor(
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService,
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder
  ) {}

  application_form = this.formBuilder.group({
    highest_educational_level: ['', [Validators.required]],
    educational_insititute: ['', [Validators.required]],
    professional_field: ['', [Validators.required]],
    years_professional_exprience: ['', [Validators.required]],
    resume: ['', [Validators.required]],
  });

  ngOnInit(): void {

    // Get applicant ID from sessionStorage and get applicant info from applicationService
    this.applicant_id = parseInt(sessionStorage.getItem('user_id') || '');
    this.applicantService
      .get_applicant(this.applicant_id)
      .subscribe((applicant) => {
        this.applicant = applicant;
      });

    // get all jobs and make pagination list
    this.activatedRoute.queryParams.subscribe((params) => {
      this.current_page_number = parseInt(params['page']);

      this.jobService.get_jobs().subscribe((jobs) => {
        this.jobs = jobs;

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
          this.number_of_jobs_show_in_one_page * (this.current_page_number - 1),
          this.number_of_jobs_show_in_one_page * this.current_page_number
        );
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
    this.router.navigate(['/job-board'], {
      queryParams: { page: (this.current_page_number - 1).toString() },
    });
  }

  change_to_next_page() {
    this.router.navigate(['/job-board'], {
      queryParams: { page: (this.current_page_number + 1).toString() },
    });
  }

  change_page(page_number: number) {
    this.router.navigate(['/job-board'], {
      queryParams: { page: page_number.toString() },
    });
  }

  get_days_between(date: Date) {
    let now = new Date().getTime();
    return Math.floor((now - new Date(date).getTime()) / (1000 * 3600 * 24));
  }

  check_application_exist(): void {
    this.applicationService
      .find_application(this.job_detail.job_id, this.applicant_id)
      .subscribe(
        (result) => {
          if (result) {
            this.aply_duplicate.nativeElement.click();
          }
        },
        (err) => {
          if (err.status === 404) {
            this.apply_form.nativeElement.click();
          }
        }
      );
  }

  apply_job() {
    let application = {
      job_id: this.job_detail.job_id,
      applicant_id: this.applicant_id,
      employer_id: this.job_detail.employer_id,
    };

    let formData = this.application_form.value;
    let f = new FormData();

    for (let k in formData) {
      f.append(k, formData[k]);
    }

    this.applicantService
      .update_applicant(this.applicant_id, f)
      .subscribe(() => {
        this.applicationService.create_application(application).subscribe(
          (result) => {
            if (result) {
              this.application_form.reset();
              this.aply_success.nativeElement.click();
            }
          },
          (err) => {}
        );
      });
  }

  on_file_change(event: any) {
    const file = event.target.files[0];
    this.application_form.patchValue({
      resume: file,
    });
  }
}

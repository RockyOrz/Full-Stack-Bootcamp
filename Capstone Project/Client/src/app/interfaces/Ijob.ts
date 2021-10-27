export interface IJob {
    job_id: number;
    employer_id: number;
    title: string;
    description: string;
    location: string;
    company_name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IJob {
  id: string;
  created_at: string;
  job_thumbnail: string;
  title: string;
  summary: string;
  slug: string;
}

export interface IProject extends IJob {
  projects: IProjectItem[];
}

export interface IProjectItem {
  id: string;
  thumnail_url: string;
  title: string;
  slug: string;
  short_detail: string;
  created_at?: string;
  detail: string;
  job_id: string;
}

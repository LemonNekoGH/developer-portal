export interface StatuspageApiResponse {
  id: string;
  page_id: string;
  group_id?: string;
  created_at: string;
  updated_at: string;
  group: boolean;
  name: string;
  description?: string;
  position: number;
  status: string;
  showcase: boolean;
  only_show_if_degraded: boolean;
  automation_email: string;
  start_date: string;
}
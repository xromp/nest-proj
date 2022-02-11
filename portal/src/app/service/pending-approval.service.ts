import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class PendingApprovalService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<any>(`${API_URL}/pending-approval`);
  }

  create(approval: any) {
    return this.http.post<any>(`${API_URL}/pending-approval`, approval);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getKpi() {
    return this.http.get<any>(`${API_URL}/kpi`);
  }

  createKpi(kpi: any) {
    return this.http.post<any>(`${API_URL}/kpi`, kpi);
  }
}

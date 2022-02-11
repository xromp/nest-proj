import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class KpiService {
  constructor(private http: HttpClient) {}

  getKpi() {
    return this.http.get<any>(`${API_URL}/kpi`);
  }

  createKpi(kpi: any) {
    return this.http.post<any>(`${API_URL}/kpi`, kpi);
  }

  createDriver(driver: any) {
    return this.http.post<any>(`${API_URL}/driver`, driver);
  }

  getDrivers() {
    return this.http.get<any>(`${API_URL}/driver`);
  }

  getKPILibrary() {
    return this.http.get<any>(`${API_URL}/kpi-library`);
  }

  createKPILibrary(folder: any) {
    return this.http.post<any>(`${API_URL}/kpi-library`, folder);
  }
}

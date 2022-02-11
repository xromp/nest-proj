import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class OrgService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<any>(`${API_URL}/org`);
  }

  create(org: any) {
    return this.http.post<any>(`${API_URL}/org`, org);
  }
}

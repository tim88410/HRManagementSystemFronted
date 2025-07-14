// src/app/services/leaves.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leaves, LeavesApiResponse } from '../leaves/leaves.model';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  private readonly baseUrl = 'https://localhost:44378/v1/Leaves';

  constructor(private http: HttpClient) {}

  getLeaves(page: number, pageLimit: number): Observable<LeavesApiResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageLimit', pageLimit.toString());

    return this.http.get<LeavesApiResponse>(this.baseUrl, { params });
  }

  createLeave(leave: Leaves): Observable<any> {
    return this.http.post(this.baseUrl, leave);
  }

  updateLeave(id: number, leave: Leaves): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, leave);
  }
}

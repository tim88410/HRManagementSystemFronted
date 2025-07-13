import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeavesService {
  private readonly baseUrl = 'https://localhost:44378';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  searchLeavesByName(): Observable<any> {
    const page = this.route.snapshot.queryParamMap.get('Page') ?? '1';
    const pageLimit = this.route.snapshot.queryParamMap.get('PageLimit') ?? '10';

    const url = `${this.baseUrl}/v1/Leaves?Page=${page}&PageLimit=${pageLimit}`;
    return this.http.get<any>(url);
  }

  updateLeave(body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/v1/Leaves`, body);
  }
}
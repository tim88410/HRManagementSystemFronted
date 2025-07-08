import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LeavesService {
  private readonly baseUrl = 'https://localhost:44378/v1/Leaves';

  constructor(private http: HttpClient) { }

  getLeaveById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  searchLeavesByName(name: string): Observable<any> {
    const encoded = encodeURIComponent(name || '');
    return this.http.get(`${this.baseUrl}?Page=1&PageLimit=10&LeaveName=${encoded}`);
  }
}
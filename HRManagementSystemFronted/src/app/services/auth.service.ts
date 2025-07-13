import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';

interface LoginResponse {
  ReturnCode: number;
  ReturnData: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token$: Observable<string> | null = null;
  private readonly baseUrl = 'https://localhost:44378';

  constructor(private http: HttpClient) {}

  login(): Observable<string> {
    if (!this.token$) {
      const headers = new HttpHeaders({
        Authorization: 'Basic c3U6MXFhekBXU1gzZWRj',
      });

      this.token$ = this.http
        .post<LoginResponse>(`${this.baseUrl}/Auth/login`, {}, { headers })
        .pipe(
          map((res) => {
            if (res.ReturnCode === 5) {
              return res.ReturnData;
            }
            throw new Error('Login failed');
          }),
          shareReplay(1)
        );
    }

    return this.token$;
  }
}
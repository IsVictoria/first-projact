import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class UpdateHistoryService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://647m1.mocklab.io/json/1');
  }
}



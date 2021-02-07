import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { contents } from '../list-item/contents/contents';

@Injectable({
  providedIn: 'root',
})
export class ContentsService {
  constructor(
    private http: HttpClient,
  ) {}

  getContentId(id: number) {
    return contents[id];
  }

  // getProducts(): Observable<any> {
  //   return this.http.get('/api/v1/products');
  //   // return this.http.get('http://localhost:3001/api/v1/products');
  // }

  // getProductById(productId: string): Observable<any> {
  //   // debugger
  //   return this.http.get('/api/v1/products/' + productId);
  // }
}
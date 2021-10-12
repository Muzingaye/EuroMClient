import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../_models/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:44333/Product/AvailableBooks');
  }
}

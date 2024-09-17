import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './services/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private readonly _HttpClint = inject(HttpClient);
  constructor() { 

  }
getbrands():Observable<any>{
  return this._HttpClint.get(`${environment.baseUrl}/api/v1/brands`)
}
getSpecificBrand(id:string |null):Observable<any>{
  return this._HttpClint.get(`${environment.baseUrl}/api/v1/brands/${id}`)
}
}

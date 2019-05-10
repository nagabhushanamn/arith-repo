import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private _http: HttpClient) { }

  doArith(num1, num2, op) {
    let api = `http://localhost:8080/api/arith/?num1=${num1}&num2=${num2}&op=${op}`
    return this._http.get(api)
  }

}

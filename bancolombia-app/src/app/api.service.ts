import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  getAccountBalance(idCuenta: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/saldo`, { idCuenta }).pipe(
      catchError(this.handleError)
    );
  }

  depositBranch(idCuenta: number, valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/depositosucursal`, { idCuenta, valor }).pipe(
      catchError(this.handleError)
    );
  }

  depositAtm(idCuenta: number, valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/depositocajero`, { idCuenta, valor }).pipe(
      catchError(this.handleError)
    );
  }

  depositAccount(idCuenta: number, valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/depositocuenta`, { idCuenta, valor }).pipe(
      catchError(this.handleError)
    );
  }

  physicalPurchase(idCuenta: number, valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/comprafisico`, { idCuenta, valor }).pipe(
      catchError(this.handleError)
    );
  }

  webPurchase(idCuenta: number, valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/compraweb`, { idCuenta, valor }).pipe(
      catchError(this.handleError)
    );
  }

  withdraw(idCuenta: number, valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cuenta/retiro`, { idCuenta, valor }).pipe(
      catchError(this.handleError)
    );
  }

  getTransactionHistory(idCuenta: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/transaccion/historico`, { idCuenta }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      if (error.status === 500) {
        errorMessage = `${error.error}`;
      } else if (error.status === 400){
        errorMessage = `${error.error.valor}`;
      } else {
        errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
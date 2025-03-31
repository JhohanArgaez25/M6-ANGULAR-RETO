import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  transactions: any[] = [];
  errorMessage: string | null = null;
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.transactionForm = this.formBuilder.group({
      accountId: ['', [Validators.required, Validators.min(1)]]
    });
   }

  onGoBack(): void {
    this.apiService.goBack();
  }

  ngOnInit(accountId: number): void {
    //this.getTransactionHistory(accountId);
  }

  fetchTransactionHistory(accountId: number): void {
    this.apiService.getTransactionHistory(accountId).subscribe(
      data => {
        this.transactions = data.historicoTransaccion;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.transactions = [];
        console.error('Error al consultar el historial de transacciones', error);
      }
    );
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const accountId = this.transactionForm.value.accountId;
      console.log('Formulario enviado con ID de cuenta:', accountId);
      this.fetchTransactionHistory(accountId);
    } else {
      console.log('Formulario inválido');
    }
  }

  get accountId() {
    return this.transactionForm.get('accountId');
  }
}

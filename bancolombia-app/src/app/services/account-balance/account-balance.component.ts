import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent {
  accountBalance: number | null = null;
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
    //this.fetchAccountBalance(accountId);
  }

  fetchAccountBalance(accountId: number): void {
    this.apiService.getAccountBalance(accountId).subscribe(
      data => {
        this.accountBalance = data.saldo;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.accountBalance = null;
        console.error('Error al consultar saldo de cuenta', error);
      }
    );
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const accountId = this.transactionForm.value.accountId;
      console.log('Formulario enviado con ID de cuenta:', accountId);
      this.fetchAccountBalance(accountId);
    } else {
      console.log('Formulario inválido');
    }
  }

  get accountId() {
    return this.transactionForm.get('accountId');
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-deposit-branch',
  templateUrl: './deposit-branch.component.html',
  styleUrls: ['./deposit-branch.component.css']
})
export class DepositBranchComponent {
  saldo: number | null = null;
  message: string | null = null;
  errorMessage: string | null = null;
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.transactionForm = this.formBuilder.group({
      accountId: ['', [Validators.required, Validators.min(1)]],
      valor: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onGoBack(): void {
    this.apiService.goBack();
  }

  ngOnInit(accountId: number, valor: number): void {
    //this.depositBranch(accountId, valor);
  }

  fetchDepositBranch(accountId: number, valor: number): void {
    this.apiService.depositBranch(accountId, valor).subscribe(
      data => {
        this.saldo = data.saldo;
        this.message = data.message;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.saldo = null;
        console.error('Error al depositar desde la sucursal', error);
      }
    );
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const accountId = this.transactionForm.value.accountId;
      const valor = this.transactionForm.value.valor;
      console.log('Formulario enviado con ID de cuenta:', accountId, ' y Valor: ', valor);
      this.fetchDepositBranch(accountId, valor);
    } else {
      console.log('Formulario inválido');
    }
  }

  get accountId() {
    return this.transactionForm.get('accountId');
  }

  get valor(){
    return this.transactionForm.get('valor');
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-physical-purchase',
  templateUrl: './physical-purchase.component.html',
  styleUrls: ['./physical-purchase.component.css']
})
export class PhysicalPurchaseComponent {
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
    //this.fetchPhysicalPurchase(accountId, valor);
  }

  fetchPhysicalPurchase(accountId: number, valor: number): void {
    this.apiService.physicalPurchase(accountId, valor).subscribe(
      data => {
        this.saldo = data.saldo;
        this.message = data.message;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.saldo = null;
        console.error('Error al realizar una compra fisica', error);
      }
    );
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const accountId = this.transactionForm.value.accountId;
      const valor = this.transactionForm.value.valor;
      console.log('Formulario enviado con ID de cuenta:', accountId, ' y Valor: ', valor);
      this.fetchPhysicalPurchase(accountId, valor);
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

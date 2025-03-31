import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AccountBalanceComponent } from './services/account-balance/account-balance.component';
import { DepositBranchComponent } from './services/deposit-branch/deposit-branch.component';
import { DepositAtmComponent } from './services/deposit-atm/deposit-atm.component';
import { DepositAccountComponent } from './services/deposit-account/deposit-account.component';
import { PhysicalPurchaseComponent } from './services/physical-purchase/physical-purchase.component';
import { WebPurchaseComponent } from './services/web-purchase/web-purchase.component';
import { WithdrawalComponent } from './services/withdrawal/withdrawal.component';
import { TransactionHistoryComponent } from './services/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AccountBalanceComponent,
    DepositBranchComponent,
    DepositAtmComponent,
    DepositAccountComponent,
    PhysicalPurchaseComponent,
    WebPurchaseComponent,
    WithdrawalComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

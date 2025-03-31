import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountBalanceComponent } from './services/account-balance/account-balance.component';
import { DepositAccountComponent } from './services/deposit-account/deposit-account.component';
import { AuthGuard } from './auth.guard';
import { DepositAtmComponent } from './services/deposit-atm/deposit-atm.component';
import { DepositBranchComponent } from './services/deposit-branch/deposit-branch.component';
import { PhysicalPurchaseComponent } from './services/physical-purchase/physical-purchase.component';
import { TransactionHistoryComponent } from './services/transaction-history/transaction-history.component';
import { WebPurchaseComponent } from './services/web-purchase/web-purchase.component';
import { WithdrawalComponent } from './services/withdrawal/withdrawal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'account-balance', component: AccountBalanceComponent, canActivate: [AuthGuard] },
  { path: 'deposit-account', component: DepositAccountComponent, canActivate: [AuthGuard] },
  { path: 'deposit-atm', component: DepositAtmComponent, canActivate: [AuthGuard] },
  { path: 'deposit-branch', component: DepositBranchComponent, canActivate: [AuthGuard] },
  { path: 'physical-purchase', component: PhysicalPurchaseComponent, canActivate: [AuthGuard] },
  { path: 'transaction-history', component: TransactionHistoryComponent, canActivate: [AuthGuard] },
  { path: 'web-purchase', component: WebPurchaseComponent, canActivate: [AuthGuard] },
  { path: 'withdrawal', component: WithdrawalComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
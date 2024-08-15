import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Form16BComponent } from './components/form-16-b/form-16-b.component';
import { TdsComplianceComponent } from './components/tds-compliance/tds-compliance.component';
import { PaymentsToSellerComponent } from './components/payments-to-seller/payments-to-seller.component';
import { DynamicTableComponent } from './components/commons/dynamic-table/dynamic-table.component';

export const routes: Routes = [
    // {path:'',component:LoginComponent},
    {path : '',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'form-16B',component:Form16BComponent},
    {path:'tds-compliance',component:TdsComplianceComponent},
    {path:'payments-to-seller',component:PaymentsToSellerComponent},
    {path:'table/:unitNo',component:DynamicTableComponent}
];

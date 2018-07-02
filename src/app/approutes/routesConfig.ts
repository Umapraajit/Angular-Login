import { Routes } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddressComponent } from '../address/address.component';
import { ArticleComponent } from '../article/article.component';
import { MyDashboardComponent } from '../layout/my-dashboard/my-dashboard.component';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: DashboardComponent,
        children: [
            { path: 'address', component: AddressComponent },
            { path: 'article', component: ArticleComponent }
        ]
    },
    { path: '**', component: LoginComponent }

];

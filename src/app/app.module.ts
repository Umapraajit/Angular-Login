import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './approutes/routesConfig';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';
import { ArticleComponent } from './article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './layout/my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddressComponent,
    ArticleComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

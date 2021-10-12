import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './shared/nav/nav.component';
import { FiltersComponent } from './main/filters/filters.component';
import { ProductListComponent } from './main/product-list/product-list.component';
import { ProductCartComponent } from './main/product-cart/product-cart.component';
import { ProductItemComponent } from './main/product-item/product-item.component';
import { ItemComponent } from './main/item/item.component';
import { RegisterComponent } from './register/register.component';
import { ProductService } from './services/product.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    ProductCartComponent,
    ProductItemComponent,
    ItemComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: MainComponent, pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'logout', component: LogoutComponent }
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

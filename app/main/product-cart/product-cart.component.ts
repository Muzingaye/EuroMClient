import {Component, OnInit} from '@angular/core';
import {MessagerService} from '../../services/messager.service';
import {Product} from '../../_models/product';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../servives/authentication.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;


  checkOutForm: FormGroup;

  constructor(private msg: MessagerService,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

    let productExist = false;

    for (const i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }

  get formControl() {
    return this.checkOutForm.controls;
  }

  onSubmit() {
    this.authService.checkOut(this.cartItems).then(user => {
      this.router.navigate(['/']);
    });
  }
}

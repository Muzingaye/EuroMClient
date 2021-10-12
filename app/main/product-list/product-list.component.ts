import { Component, OnInit, Inject } from '@angular/core';
import { ProductService} from '../../services/product.service';
import {Product} from '../../_models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.productService.getProduct()
     .subscribe(data => this.productList = data);
  }

}

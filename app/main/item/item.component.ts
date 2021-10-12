import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../../_models/product';
import { MessagerService} from '../../services/messager.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() productItem: Product;
  constructor(private  msg: MessagerService) { }

  ngOnInit(): void {
  }
 handleAddToCart() {
    this.msg.sendMessage(this.productItem);
  }
}

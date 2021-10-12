export class Product {

  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  imageLocation: string;
  captureDate: Date;

  constructor(id, name, description = '' , quantity = 1, price = 0.00, imageLocation= '../assets/sneakers', captureDate) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.imageLocation = imageLocation;
    this.captureDate = captureDate;
  }


}

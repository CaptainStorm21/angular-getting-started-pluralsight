import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // listFilter: 'cart';
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;


  // getter and setter
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  // filter products
  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Birthday Cards',
      productCode: 'GCJ-83922',
      releaseDate: 'March 23, 1990',
      description: 'Birthday Cards',
      price: 23.2,
      starRating: 3,
      imageUrl: 'assets/images/birhday_cards.jpg'
    },
    {
      productId: 5,
      productName: 'Birthday Flowers',
      productCode: 'FCJ-83922',
      releaseDate: 'March 23, 2019',
      description: 'Birthday Flowers white roses',
      price: 13.22,
      starRating: 5,
      imageUrl: 'assets/images/birhday_flowers.jpg'
    }
  ];

// setter
performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  ngOnInit() {
    console.log('in OnInit');
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Array<{ name: string, image: string, price: number, quantity: number }> = [
    { name: 'Tomatoes', image: 'assets/tomatoes.jpg', price: 3.5, quantity: 10 },
    { name: 'Potatoes', image: 'assets/potatoes.jpg', price: 2.0, quantity: 15 },
    { name: 'Potatoes', image: 'assets/potatoes.jpg', price: 2.0, quantity: 15 },
    { name: 'Potatoes', image: 'assets/potatoes.jpg', price: 2.0, quantity: 15 },

  ];

  isAddProductModalOpen: boolean = false;
  newProduct = { name: '', image: '', price: 0, quantity: 0 };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  openAddProductModal(): void {
    this.isAddProductModalOpen = true;
  }

  closeAddProductModal(): void {
    this.isAddProductModalOpen = false;
  }

  onSubmitAddProduct(): void {
    this.products.push({ ...this.newProduct });
    this.newProduct = { name: '', image: '', price: 0, quantity: 0 };
    this.closeAddProductModal();
  }


}

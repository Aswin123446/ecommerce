import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';
  cartCount:number=0;
  constructor(private apiService: ApiService, private router: Router,private cartService:CartService) {}




  ngOnInit(): void {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });

  
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  loadProducts(category: string) {
    this.apiService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
      this.filteredProducts = data; 
    });
  }

 
  filterProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = this.products; 
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

 

  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
  
}

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/services/products.service';
import { Subscription } from 'rxjs';
import {  IProduct } from '../../Core/inter-faces/iprodect';
import { CategoriesService } from '../../Core/services/categories.service';
import { ICategory } from '../../Core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SalePipe } from '../../Core/pipes/sale.pipe';
import { TermtextPipe } from '../../Core/pipes/termtext.pipe';
import { SearchPipe } from '../../Core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule , RouterLink , FormsModule ,SearchPipe , SalePipe , TermtextPipe , UpperCasePipe , LowerCasePipe , TitleCasePipe , SlicePipe , CurrencyPipe , DatePipe , JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy {
private readonly _ProductsService = inject(ProductsService);
private readonly _CategoriesService = inject(CategoriesService);
private readonly _CartService = inject(CartService);
private readonly _ToastrService = inject(ToastrService);
private readonly _NgxSpinnerService = inject(NgxSpinnerService);
productsList:IProduct[] = [];
categoriesList:ICategory[] = [];

text : string = "";

getAllProductSub ! :Subscription

customOptionsMain: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  rtl:true,
  items:1,
  nav: true
}

customOptionsCat: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  rtl:true,
  pullDrag: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  dots: false,
  navSpeed: 700,
  navText: ['Prev', 'Next'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: false
}



ngOnInit(): void {

  this._CategoriesService.getAllCategories().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.categoriesList = res.data;
    }
  })

   this.getAllProductSub = this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productsList = res.data;}
    })
}
ngOnDestroy(): void {
this.getAllProductSub?.unsubscribe()
}

addCart(id:string):void{
  this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      console.log(res);
     this._ToastrService.success(res.message , 'FreshCart');
     this._CartService.cartNumber.next(res.numOfCartItems);
     console.log( this._CartService.cartNumber )
    },

  })
}
}

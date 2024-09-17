import { IProduct } from './../../Core/inter-faces/iprodect';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../Core/pipes/search.pipe';
import { TermtextPipe } from '../../Core/pipes/termtext.pipe';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ProductsService } from '../../Core/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prodect',
  standalone: true,
  imports: [ RouterLink , FormsModule ,SearchPipe ,  TermtextPipe , UpperCasePipe , LowerCasePipe , TitleCasePipe ,  CurrencyPipe , DatePipe , JsonPipe],
  templateUrl: './prodect.component.html',
  styleUrl: './prodect.component.scss'
})
export class ProdectComponent implements OnInit {
  getAllProSub ! :Subscription
  private readonly _ProductsService = inject(ProductsService);
  productsList:IProduct[] = [];
  text : string = "";
  ngOnInit(): void {
    this.getAllProSub = this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productsList=res.data
      }
    })
}
ngOnDestroy(): void {
  this.getAllProSub?.unsubscribe()
  }
}

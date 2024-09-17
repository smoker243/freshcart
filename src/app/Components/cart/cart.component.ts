import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../Core/services/cart.service';
import { ICart } from '../../Core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
private readonly _CartService = inject (CartService);
cartDetails : ICart = {} as ICart;
ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.cartDetails = res.data
      },
    })
}

removeItem(id:string): void {
this._CartService.deleteSpecificCartItem(id).subscribe({
  next:(res)=>{
    console.log(res)
    this.cartDetails = res.data;
    this._CartService.cartNumber.next(res.numOfCartItems)
  },
})
}

updateCount(id:string , count:number):void{
if (count > 0){
  this._CartService.updateProductQuantity(id , count).subscribe({
    next:(res)=>{
      console.log(res)
      this.cartDetails = res.data
    },
  })
}
}

clearItems():void{
  this._CartService.clearCart().subscribe({
    next:(res)=>{
      console.log(res)
      if(res.message == 'success'){
      this.cartDetails = {} as ICart;
      this._CartService.cartNumber.next(0)
      }
    },
  })
}


}

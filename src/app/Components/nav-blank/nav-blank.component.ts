import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Core/services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../Core/services/mytranslate.service';
import { CartService } from '../../Core/services/cart.service';
import { subscribe } from 'diagnostics_channel';
import { nextTick } from 'process';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive , TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
 readonly _AuthService = inject(AuthService);
 private readonly _MytranslateService = inject(MytranslateService);
 private readonly _CartService = inject(CartService);

 countNumber : number = 0;


ngOnInit(): void {
  this._CartService.getProductsCart().subscribe({
    next:(res)=>{
      console.log('cart item' , res)
      this._CartService.cartNumber.next(res.numOfCartItems)
    }
  })
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.countNumber = data ;
      }
    })
}

 readonly _TranslateService = inject(TranslateService);
change(lang:string):void{
this._MytranslateService.changeLang(lang)
}
}

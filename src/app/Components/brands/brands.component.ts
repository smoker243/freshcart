import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../Core/brands.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICategory } from '../../Core/interfaces/icategory';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  getAllBrandSub ! :Subscription
  private readonly _BrandsService=inject(BrandsService)
  getbrand:ICategory[]=[]
  text:string=''
  ngOnInit(): void {
      this.getAllBrandSub = this._BrandsService.getbrands().subscribe({
        next:(res)=>{
          console.log(res);
          
       this.getbrand=res.data
        }
      })
  }
  ngOnDestroy(): void {
    this.getAllBrandSub?.unsubscribe()
    }
}

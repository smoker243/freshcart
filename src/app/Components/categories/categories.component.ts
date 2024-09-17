import { CurrencyPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ICategory } from '../../Core/interfaces/icategory';
import { SalePipe } from '../../Core/pipes/sale.pipe';
import { SearchPipe } from '../../Core/pipes/search.pipe';
import { TermtextPipe } from '../../Core/pipes/termtext.pipe';
import { CategoriesService } from './../../Core/services/categories.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink,SearchPipe,FormsModule , SalePipe , TermtextPipe , UpperCasePipe , LowerCasePipe , TitleCasePipe  , SlicePipe , CurrencyPipe ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  getAllCatrSub ! :Subscription
private readonly _CategoriesService=inject(CategoriesService)
getcat:ICategory[]=[]
text:string=''
ngOnInit(): void {
    this.getAllCatrSub = this._CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        
     this.getcat=res.data
      }
    })
}
ngOnDestroy(): void {
  this.getAllCatrSub?.unsubscribe()
  }
}

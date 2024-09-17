import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Core/services/products.service';
import { ICategory } from '../../Core/interfaces/icategory';
import { CategoriesService } from '../../Core/services/categories.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detailscat',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './detailscat.component.html',
  styleUrl: './detailscat.component.scss'
})
export class DetailscatComponent implements OnInit {
  private readonly _ActivatedRoute = inject (ActivatedRoute);
  private readonly _ProductsService = inject(CategoriesService);
  detailsProduct: ICategory | null = null;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
         let idProduct = params.get('id');
         this._ProductsService.getSpecificCategory(idProduct).subscribe({
          next:(res)=>{
            console.log(res.data);
            this.detailsProduct = res.data;
          },
          error:(err)=>{
            console.log(err)
          },
         })
        }
      })
  }
}

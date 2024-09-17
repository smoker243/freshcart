import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../Core/services/categories.service';
import { ICategory } from '../../Core/interfaces/icategory';
import { BrandsService } from '../../Core/brands.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detailsbrand',
  standalone: true,
  imports: [ DatePipe ],
  templateUrl: './detailsbrand.component.html',
  styleUrl: './detailsbrand.component.scss'
})
export class DetailsbrandComponent implements OnInit {
  private readonly _ActivatedRoute = inject (ActivatedRoute);
  private readonly _BrandsService = inject(BrandsService);
  detailsProduct: ICategory | null = null;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
         let idProduct = params.get('id');
         this._BrandsService.getSpecificBrand(idProduct).subscribe({
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

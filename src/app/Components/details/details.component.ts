import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Core/services/products.service';
import { IProduct } from '../../Core/inter-faces/iprodect';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
private readonly _ActivatedRoute = inject (ActivatedRoute);
private readonly _ProductsService = inject(ProductsService);
detailsProduct: IProduct | null = null;
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       let idProduct = params.get('id');
       this._ProductsService.getSpecificProducts(idProduct).subscribe({
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

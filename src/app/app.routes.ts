import { DetailsbrandComponent } from './Components/detailsbrand/detailsbrand.component';
import { DetailscatComponent } from './componets/detailscat/detailscat.component';
import { Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';
import { logedGuard } from './Core/guards/loged.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';

export const routes: Routes = [
    {
        path: '', 
        component: AuthLayoutComponent,
        canActivate: [logedGuard],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () => import('./Components/login/login.component').then(m => m.LoginComponent),
            },
            {
                path: 'register',
                loadComponent: () => import('./Components/register/register.component').then(m => m.RegisterComponent),
            },
            {
                path: 'forgot',
                loadComponent: () => import('./Components/fotgotpassword/fotgotpassword.component').then(m => m.FotgotpasswordComponent),
            }
        ]
    },
    {
        path: '', 
        component: BlankLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./Components/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'products',
                loadComponent: () => import('./Components/prodect/prodect.component').then(m => m.ProdectComponent),
            },
            {
                path: 'cart',
                loadComponent: () => import('./Components/cart/cart.component').then(m => m.CartComponent),
            },
            {
                path: 'brands',
                loadComponent: () => import('./Components/brands/brands.component').then(m => m.BrandsComponent),
            },
            {
                path: 'categories',
                loadComponent: () => import('./Components/categories/categories.component').then(m => m.CategoriesComponent),
            },
            {
                path: 'details/:id',
                loadComponent: () => import('./Components/details/details.component').then(m => m.DetailsComponent),
            },
            {
                path: 'allorders',
                loadComponent: () => import('./Components/allorders/allorders.component').then(m => m.AllordersComponent),
            },
            {
                path: 'orders/:id',
                loadComponent: () => import('./Components/orders/orders.component').then(m => m.OrdersComponent),
            },
            {
                path: 'detailscat/:id',
                loadComponent: () => import('./componets/detailscat/detailscat.component').then(m => m.DetailscatComponent),
            },
            {
                path: 'detailsbrand/:id',
                loadComponent: () => import('./Components/detailsbrand/detailsbrand.component').then(m => m.DetailsbrandComponent),
            }

        ]
    },
    {
        path: '**',
        loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent),
    }
];

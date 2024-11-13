import { Routes } from '@angular/router';
import { HomeComponent } from './home/Page/home.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    //forma basica
    {path: 'about', loadComponent:()=>import('./components/about/about.component').then(m=>m.AboutComponent)},

    { path: '**', redirectTo: '', pathMatch: 'full' },
];


    //otra forma solo debes de exportar como defaul 
    //{path: 'about', loadComponent:()=>import('./components/about/about.component')},
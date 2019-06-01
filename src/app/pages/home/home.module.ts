import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      { path: 'noticias', loadChildren: '../noticias/noticias.module#NoticiasPageModule' },
      { path: 'Map', loadChildren: '../map/map.module#MapPageModule' },
      { path: 'atividades', loadChildren: '../atividades/atividades.module#AtividadesPageModule' },
      { path: 'contato', loadChildren: '../contato/contato.module#ContatoPageModule' },
      { path: 'details', loadChildren: '../details/details.module#DetailsPageModule' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
      { path: 'servicos', loadChildren: '../servicos/servicos.module#ServicosPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: 'home/noticias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }

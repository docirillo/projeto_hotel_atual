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
      { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
      { path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
      { path: 'tab3', loadChildren: '../tab3/tab3.module#Tab3PageModule' },
      { path: 'tab4', loadChildren: '../tab4/tab4.module#Tab4PageModule' }

    ]
  },
  {
    path: '',
    redirectTo: 'home/tab1',
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

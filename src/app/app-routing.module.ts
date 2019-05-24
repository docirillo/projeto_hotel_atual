import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule', canActivate: [AuthGuard] },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule', canActivate: [AuthGuard] },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule', canActivate: [AuthGuard] },
  { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

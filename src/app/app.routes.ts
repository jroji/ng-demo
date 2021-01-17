import { Routes } from "@angular/router";
import { AuthGuard } from "@core/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('@features/detail/detail.module').then((m) => m.DetailModule),
    canActivate: [AuthGuard]
  }
];

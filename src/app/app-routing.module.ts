import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {UserLayoutModule} from './layout/user/user-layout.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/user/user-layout.module').then(
            (m) => m.UserLayoutModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

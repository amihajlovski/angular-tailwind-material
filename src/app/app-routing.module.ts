import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/shared/components/main-layout/main-layout.component';
import { PageNotFoundComponent } from './pages/not-found/page-not-foud.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'event' },
  {
    path: '',
    component: MainLayoutComponent,
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

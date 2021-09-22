import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UpdateHistoryComponent} from './update-history/update-history.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateHistoryComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

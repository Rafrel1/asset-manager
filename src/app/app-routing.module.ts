import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetComponent } from './asset/asset.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetListComponent } from './asset-list/asset-list.component';

const routes: Routes = [
  { path: 'asset-detail/:id', component: AssetDetailComponent },
  { path: 'asset-list', component: AssetListComponent },
  { path: '', redirectTo: '/asset-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

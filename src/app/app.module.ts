import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssetComponent } from './asset/asset.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetListModule } from './asset-list/asset-list.module';

@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    AssetDetailComponent,
    AssetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AssetListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Asset } from './asset';
import { ASSETS } from './mock-assets';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  getAssets(): Observable<Asset[]> {
    return of(ASSETS);
  }

  getAsset(id: number | string) {
    return this.getAssets().pipe(
      // (+) before `id` turns the string into a number
      map((assets: Asset[]) => assets.find(asset => asset.id === +id))
    );
  }
}

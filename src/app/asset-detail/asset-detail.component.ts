import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';

import { AssetService } from '../asset.service';
import { Asset } from '../asset';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  asset$: Observable<Asset>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AssetService
  ) { }

  ngOnInit(): void {
    this.asset$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getAsset(params.get('id'))
      ));
  }

}

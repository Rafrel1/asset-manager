import { Component, NgModule, OnInit } from '@angular/core';
import { ASSETS } from '../mock-assets';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})

export class AssetListComponent implements OnInit {

  assets = ASSETS;

  constructor() { }

  ngOnInit(): void {
  }

}

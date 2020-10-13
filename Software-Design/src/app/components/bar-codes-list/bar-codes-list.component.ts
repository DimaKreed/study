import { Component, OnInit } from '@angular/core';
import {IBarCode} from "./interface/bar-code";

@Component({
  selector: 'app-bar-codes-list',
  templateUrl: './bar-codes-list.component.html',
  styleUrls: ['./bar-codes-list.component.css']
})
export class BarCodesListComponent implements OnInit {

  constructor() { }
BarCodes:IBarCode[]=[{name:'smth',comment:'some comment',img:'src/app/components/bar-codes-list/img/barcode.png'},
  {name:'smth',comment:'some comment',img:'src/app/components/bar-codes-list/img/barcode.png'},
  {name:'smth',comment:'some comment',img:'src/app/components/bar-codes-list/img/barcode.png'},
  {name:'smth',comment:'some comment',img:'src/app/components/bar-codes-list/img/barcode.png'},
  {name:'smth',comment:'some comment',img:'src/app/components/bar-codes-list/img/barcode.png'},
  {name:'smth',comment:'some comment',img:'src/app/components/bar-codes-list/img/barcode.png'}];
  ngOnInit(): void {
  }

}

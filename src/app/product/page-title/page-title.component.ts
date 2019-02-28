import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  constructor() { }
  @Input() public title: string;
  @Input() public children: {title: string, link: string}[];
  ngOnInit() {
  }

}
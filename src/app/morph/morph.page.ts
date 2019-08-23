import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-morph',
  templateUrl: './morph.page.html',
  styleUrls: ['./morph.page.scss']
})
export class MorphPage implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;

  constructor() {}

  ngOnInit() {}
}

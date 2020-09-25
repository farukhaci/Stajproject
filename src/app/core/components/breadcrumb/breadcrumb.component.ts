import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'masoft-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: { label: string; url: string }[] = [];

  constructor() {}

  ngOnInit() {}
}

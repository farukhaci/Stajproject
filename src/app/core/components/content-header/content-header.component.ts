import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services';

@Component({
  selector: 'masoft-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  constructor(private _configService: ConfigService) {}

  ngOnInit() {}

  get headerBackground() {
    return `url(${this._configService.headerBackgroundImg})`;
  }
}

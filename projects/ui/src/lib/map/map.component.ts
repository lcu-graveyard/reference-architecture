import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Address } from '@lcu/common';

@Component({
  selector: 'f-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit, OnChanges {
  //  Fields
  protected rootMapUrl: string;

  //  Properties
  @Input('address')
  public Address: Address;

  @Input('key')
  public MapKey: string;

  public MapUrl: any;

  @Input('scroll-off')
  public MapScrollOff: boolean;

  @Input('name')
  public Name: string;

  //  Constructors
  constructor(protected sanitizer: DomSanitizer) {
    this.rootMapUrl = 'https://www.google.com/maps/embed/v1/place';
  }

  //	Life Cycle
  public ngOnChanges() {
    this.setMapUrl();
  }

  public ngOnInit() {
    this.setMapUrl();
  }

  //	API Methods

  //	Helpers
  protected setMapUrl() {
    if (!this.MapKey || !this.Address)
      this.MapUrl = '';
    else {
      var query = [this.Name || '', this.Address.Street1, this.Address.Unit || '', this.Address.City, this.Address.State, this.Address.Zip].join(',');

      if (query.indexOf(',') == 0)
        query = query.substring(1);

      query = query.replace(',,', ',');

      this.MapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.rootMapUrl}?key=${this.MapKey}&q=${query}`);
    }
  }
}

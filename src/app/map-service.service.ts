import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as ol from 'openlayers';

@Injectable()
export class MapServiceService {

  constructor(private http: Http) { }

  createData(){
    var vector = new ol.layer.Vector({
      source: new ol.source.Vector({
        url: '../test.gpx',
        format: new ol.format.GPX()
      })
    });
    return vector;
  }

  initializeMap(){
    var map = new ol.Map({
      layers:[
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        this.createData()
      ],
      target: 'map',
      controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
      }),
      view: new ol.View({
        center: [-13655693.8492,5704304.21906],
        zoom: 12
      })
    });
  }

}

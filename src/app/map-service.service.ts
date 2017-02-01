import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as ol from 'openlayers';


@Injectable()
export class MapServiceService {

  constructor(private http: Http) { }

  createPin(){
    var iconFeature = new ol.Feature({
      geometry: new ol.geom.Point([-13548593.9237,5677830.15763]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

    var pinSource = new ol.source.Vector({
      features: [iconFeature]
    });
    var pinLayer = new ol.layer.Vector({
      source: pinSource
    });
    return pinLayer
  }

  setStyle(){
    var  style = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#f4bf42',
        width: 0.7
      })
    })
    return style
  }


  createData(){
    var vector = new ol.layer.Vector({
      source: new ol.source.Vector({
        url: '../trail.json',
        format: new ol.format.GeoJSON()
      }),
      style: this.setStyle()
    });
    return vector;
  }

  initializeMap(){
    var map = new ol.Map({
      layers:[
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'terrain'
          })
        }),
        this.createData(),
        this.createPin()
      ],
      target: 'map',
      controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
      }),
      view: new ol.View({
        center: [-13548593.9237,5677830.15763],
        zoom: 8
      })
    });
  }

}

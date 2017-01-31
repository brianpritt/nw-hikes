import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as ol from 'openlayers';


@Injectable()
export class MapServiceService {

  constructor(private http: Http) { }

  createFirebase(){
    var firebaseRef = firebase.database().ref('trails').push();
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
        this.createData()
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

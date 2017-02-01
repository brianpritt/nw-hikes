import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as ol from 'openlayers';


@Injectable()
export class MapServiceService {

  constructor(private http: Http) { }

  createPin(x, y){
    //console.log("going into create pin: " + x, y)
    var iconFeature = new ol.Feature({
      geometry: new ol.geom.Point([x,y])
    });

    var pinSource = new ol.source.Vector({
      features: [iconFeature]
    });
    var pinLayer = new ol.layer.Vector({
      source: pinSource,
      maxResolution: 500,
      style: this.setStyle()
    });
    return pinLayer
  }

  setStyle(){
    var  style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({
          color: 'rgba(255, 153, 0, 0.8)'
        }),
        stroke: new ol.style.Stroke({
          color: 'black',
          width: 1
        })
      })
    })
    return style
  }

  initializeMap(x,y,z){
    var map = new ol.Map({
      layers:[
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'terrain'
          })
        }),
        this.createPin(x,y)
      ],
      target: 'map',
      controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
      }),
      view: new ol.View({
        center: [x,y],
        zoom: z
      })
    });
  }
  //-13548593.9237,5677830.15763

}

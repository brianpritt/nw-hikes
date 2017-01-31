import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css'],
  providers: [MapServiceService]
})
export class MapDisplayComponent implements OnInit {

  constructor(private mapService: MapServiceService) { }

  ngOnInit() {
    this.mapService.initializeMap();
    // this.mapService.transformData().subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // );
    this.mapService.createData();
  }


}

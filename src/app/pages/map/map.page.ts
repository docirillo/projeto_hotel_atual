import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;


@Component({
  selector: 'app-Map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {
  latitude: any;
  longitude: any;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  constructor(private geolocation: Geolocation) { }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: { lat: -13.6623798, lng: -69.6519205 },
        zoom: 16
      });
// tslint:disable-next-line: new-parens
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Você está aqui.');
      infoWindow.open(map);
      map.setCenter(pos);
    }).catch((error) => {
      console.log('Erro ao obter localização', error);
    });
  }

  ngOnInit() {
  }



}

import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   cordova: String;
     model: String;
     devicePlatform: String;
     uuid: String;
     version: String;
     manufacturer: String;
     isVirtual: Boolean;
     serial: String;
     constructor(private platform: Platform,
       private device: Device) {
       platform.ready().then(() => {
         let device = this.device;
         this.cordova = device.cordova;
         this.model = device.model;
         this.devicePlatform = device.platform;
         this.uuid = device.uuid;
         this.version = device.version;
         this.manufacturer = device.manufacturer;
         this.isVirtual = device.isVirtual;
         this.serial = device.serial;
}); }






}

// The Platform service can be used to get information about your current device.
//  You can get all of the platforms associated with
//  the device using the platforms method, including whether the app is being viewed
//   from a tablet, if it's on a mobile device or browser, and the exact platform
//   (iOS, Android, etc). You can also get the orientation of the device,
//   if it uses right-to-left language direction, and much much more.
//    With this information you can completely customize your app to fit any device.

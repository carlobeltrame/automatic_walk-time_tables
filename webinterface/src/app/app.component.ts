import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import * as gpxParser from 'gpxparser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

  }


  static baseURL = environment.API_URL;


  title = 'automatic-walk-time-tables';
  pending = false;
  showDownloadLink = false;
  uuid: string = '';


  download_map() {

    this.showDownloadLink = false;
    this.pending = true;
    const uploaderElement = (document.getElementById('uploader') as HTMLInputElement);

    if (uploaderElement === null)
      return;

    // @ts-ignore
    let gpx_file: File = uploaderElement.files[0];
    let formData = new FormData();

    formData.append("file", gpx_file);

    const url = AppComponent.baseURL + "create?--velocity=5"
    fetch(url, {
      method: "POST",
      headers: {
        Accept: 'text/plain',
      },
      body: formData
    })
      .then(response => response.text())
      .then((resp: any) => {

        const response = JSON.parse(resp)
        this.uuid = response['uuid'];
        console.log(this.uuid)

        this.download_data()

        AppComponent.get_status_updates(this.uuid)

      })
      .catch(console.log)

  }

  static get_status_updates(uuid: string) {

    console.log('Request a status update.')

    const baseURL = AppComponent.baseURL + "status/"

    fetch(baseURL + uuid)
      .then(response => response.json())
      .then(res => {
        console.log(res);

        if (['error', 'finished'].includes(res.status))
          return;

        setTimeout(() => this.get_status_updates(uuid), 500)
      });

  }

  download_data() {

    this.pending = false;
    this.showDownloadLink = true;

  }

  gpx_uploaded() {

  }
}

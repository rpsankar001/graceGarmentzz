import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  logo: any;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  imgLink: any;
  imgData: any;
  description: any;
  price: number = 0;

  selectFile(event: any) {
    this.imgLink = '';

    this.imgData = event.target.files[0];

    //In your case
    this.logo = this.imgData;

    let mimeType = this.imgData.type;

    if (mimeType.match(/image\/*/) == null) {
      const message =
        'This file type is not supported, Please upload in image format';
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.imgData);
    reader.onload = (event) => {
      this.imgLink = this._sanitizer.bypassSecurityTrustResourceUrl(
        String(reader?.result)
      );
    };
  }
  removeUpload() {
    this.imgLink = '';
  }

  upload() {
    // var data = readFileSync('.assets/data.json');
    // var myObject = JSON.parse(data);
    // let newData = {
    //   country: 'England',
    // };
    // myObject.push(newData);
    // // Writing to our JSON file
    // var newData2 = JSON.stringify(myObject);
    // writeFile('data2.json', newData2, (err: any) => {
    //   // Error checking
    //   if (err) throw err;
    //   console.log('New data added');
    // });
  }
}

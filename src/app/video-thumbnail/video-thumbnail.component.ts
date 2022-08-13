import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.less']
})
export class VideoThumbnailComponent implements OnInit {

  imgSrc: SafeUrl = '';
  url: SafeUrl = '';
  @ViewChild("videoElement") videoElement: ElementRef = <ElementRef>{};
  @ViewChild("canvasElement") canvasElement: ElementRef = <ElementRef>{};
  constructor(private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }


  async convert() {
    this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(await this.getVideoImage());
  }

  onFileSelect(event: any) {
    const files: FileList = event.srcElement.files;
    const file = files[0];
    this.url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
  }

  private getVideoImage(): Promise<string> {
    return new Promise((resolve, reject) => {
      const canvas: HTMLCanvasElement | null = this.canvasElement.nativeElement;
      const video: HTMLVideoElement | null = this.videoElement.nativeElement;
      if (canvas && video) {
        debugger;
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        canvas.getContext('2d');

        const ctx = canvas.getContext("2d");
        ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        // const data = canvas.toDataURL("image/jpeg");
        // resolve(data);
        ctx?.canvas.toBlob(blob => {
          if (blob) {

            // const file = new File([blob], "image.jpeg");
            // resolve(file);
            resolve(URL.createObjectURL(blob));
          }
        }, "image/jpeg", .75);
      }
    });
  }

}

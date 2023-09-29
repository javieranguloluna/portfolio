import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

export interface SectionBannerImage {
  name: string;
  description: string
}

export interface SectionBannerData {
  content: string;
  image: SectionBannerImage;
  reverse: boolean;
}

@Component({
  selector: 'app-section-banner',
  templateUrl: './section-banner.component.html',
  styleUrls: ['./section-banner.component.scss']
})
export class SectionBannerComponent implements AfterViewInit {

  @ViewChild('content') contentDiv!: ElementRef

  @Input() content: string = ''
  @Input() image!: SectionBannerImage 
  @Input() reverse: boolean = false 

  ngAfterViewInit(): void {
    this.contentDiv.nativeElement.innerHTML = this.content
  }

}

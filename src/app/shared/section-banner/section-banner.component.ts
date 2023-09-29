import { Component, Input } from '@angular/core';

export interface SectionBannerImage {
  name: string;
  description: string
}

@Component({
  selector: 'app-section-banner',
  templateUrl: './section-banner.component.html',
  styleUrls: ['./section-banner.component.scss']
})
export class SectionBannerComponent {

  @Input() image!: SectionBannerImage 

}

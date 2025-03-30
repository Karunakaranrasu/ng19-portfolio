import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {CommonService} from '../../common/common.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatDividerModule, MatIconModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private commonService = inject(CommonService);
  imageSrc = 'https://i.imgur.com/hbgTJ2w.jpeg';
  imageLoaded = false;

  ngOnInit() {
    this.preloadImage(this.imageSrc);
  }

  downloadCV() {
    this.commonService.downloadCV();
  }

  // for image loading optimization
  preloadImage(src: string) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      this.imageLoaded = true;
    };
  }
}

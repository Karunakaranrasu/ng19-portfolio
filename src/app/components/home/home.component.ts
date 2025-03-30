import {Component, inject} from '@angular/core';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private commonService = inject(CommonService);

  downloadCV() {
    this.commonService.downloadCV();
  }
}

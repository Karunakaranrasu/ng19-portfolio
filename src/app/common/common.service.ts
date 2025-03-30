import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  pdfUrl: string = 'https://drive.google.com/uc?export=download&id=15qCGXS7SGQ2f-erIGP28oO9KEM6rv998';

  constructor() {}

  downloadCV() {
    window.open(this.pdfUrl, '_blank');
  }
}

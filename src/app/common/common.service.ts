import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  pdfUrl: string = 'https://drive.google.com/uc?export=download&id=1GyJ5TBJu5JqJn2isO3mKPkSEBdUS5c2s';

  constructor() {}

  downloadCV() {
    window.open(this.pdfUrl, '_blank');
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.
import {ParticlesConfig} from './common/particles-config';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ng19-portfolio';
  top: any;
  left: any;
  expand = false;

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = $event.pageY - 10 + 'px';
    this.left = $event.pageX - 10 + 'px';
  }
}

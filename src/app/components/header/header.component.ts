import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    style: 'display: contents',
  },
  template: `
    <header id="header" [style.background-position]="bgPosition()">
      <div class="inner">
        <img ngSrc="assets/images/aliance_logo-cropped.svg" alt="Aliance žen s rakovinou prsu" width="150" height="150" priority />
        <h1><strong>Aliance žen</strong><br />
        s rakovinou prsu<br />
        Lorem ipsum dolor sit amet.</h1>
      </div>
      <div class="desktop-footer">
        <div class="inner">
          <ul class="icons">
            <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon solid fa-envelope"><span class="label">E-mail</span></a></li>
          </ul>
          <ul class="copyright">
            <li>&copy; Aliance žen s rakovinou prsu</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly bgPosition = signal('left 0px');

  onScroll(): void {
    const scrollY = window.scrollY;
    this.bgPosition.set(`left ${-1 * (scrollY / 20)}px`);
  }
}

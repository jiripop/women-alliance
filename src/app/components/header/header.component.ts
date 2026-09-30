import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: contents',
  },
  template: `
    <header id="header">
      <div class="inner">
        <img ngSrc="assets/images/intro.png" alt="Vzpěračky Masters pro Alianci žen s rakovinou prsu" width="1222" height="826" priority class="header-image" />
      </div>
      <div class="desktop-footer">
        <div class="inner">
          <ul class="icons">
            <li><a href="https://www.breastcancer.cz/" class="icon solid fa-globe"><span class="label">Web</span></a></li>
            <li><a href="https://www.facebook.com/AlianceZenSRakovinouPrsuOps" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/aliancezen/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="mailto:aliance@breastcancer.cz" class="icon solid fa-envelope"><span class="label">E-mail</span></a></li>
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
export class HeaderComponent {}

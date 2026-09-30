import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer id="footer">
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
    </footer>
  `,
})
export class FooterComponent {}

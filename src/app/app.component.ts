import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ActivitiesComponent,
    ContactComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: contents',
  },
  template: `
    <app-header />

    <div id="main">
      <app-about />

      @defer (on viewport) {
        <app-activities />
      } @placeholder {
        <div style="min-height: 200px"></div>
      }

      @defer (on viewport) {
        <app-contact />
      } @placeholder {
        <div style="min-height: 200px"></div>
      }
    </div>

    <!-- Footer after main: visible on mobile (<=980px) -->
    <app-footer class="mobile-footer" />
  `,
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {
      setTimeout(() => document.body.classList.remove('is-preload'), 100);
    });
  }
}

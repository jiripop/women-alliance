import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Activity {
  thumbSrc: string;
  title?: string;
  description?: string;
}

const ACTIVITIES: Activity[] = [
  { thumbSrc: 'assets/images/thumbs/01.png' },
  { thumbSrc: 'assets/images/thumbs/02.png' },
  { thumbSrc: 'assets/images/thumbs/03.png' },
  { thumbSrc: 'assets/images/thumbs/qr-code.svg', title: 'Údaje pro platbu' },
];

@Component({
  selector: 'app-activities',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="activities">
      <h2>Ukázka kalendáře</h2>
      <div class="row">
        @for (activity of activities; track activity.thumbSrc) {
          <article class="col-6 col-12-xsmall work-item">
            <div class="image fit">
              <img [src]="activity.thumbSrc" [alt]="activity.title" />
            </div>
            @if (activity.title) { <h3>{{ activity.title }}</h3> }
            @if (activity.description) { <p>{{ activity.description }}</p> }
          </article>
        }
      </div>
    </section>
  `,
})
export class ActivitiesComponent {
  readonly activities = ACTIVITIES;
}

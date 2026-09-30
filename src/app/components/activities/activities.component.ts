import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Activity {
  fullSrc: string;
  thumbSrc: string;
  title: string;
  description: string;
}

const ACTIVITIES: Activity[] = [
  { fullSrc: 'assets/images/fulls/01.jpg', thumbSrc: 'assets/images/thumbs/01.jpg', title: 'Magna sed consequat tempus', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
  { fullSrc: 'assets/images/fulls/02.jpg', thumbSrc: 'assets/images/thumbs/02.jpg', title: 'Ultricies lacinia interdum', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
  { fullSrc: 'assets/images/fulls/03.jpg', thumbSrc: 'assets/images/thumbs/03.jpg', title: 'Tortor metus commodo', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
  { fullSrc: 'assets/images/fulls/04.jpg', thumbSrc: 'assets/images/thumbs/04.jpg', title: 'Quam neque phasellus', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
  { fullSrc: 'assets/images/fulls/05.jpg', thumbSrc: 'assets/images/thumbs/05.jpg', title: 'Nunc enim commodo aliquet', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
  { fullSrc: 'assets/images/fulls/06.jpg', thumbSrc: 'assets/images/thumbs/06.jpg', title: 'Risus ornare lacinia', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
];

@Component({
  selector: 'app-activities',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="activities">
      <h2>Naše aktivity</h2>
      <div class="row">
        @for (activity of activities; track activity.thumbSrc) {
          <article class="col-6 col-12-xsmall work-item">
            <a [href]="activity.fullSrc" class="image fit thumb">
              <img [src]="activity.thumbSrc" [alt]="activity.title" />
            </a>
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.description }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class ActivitiesComponent {
  readonly activities = ACTIVITIES;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact">
      <h2>Kontaktujte nás</h2>
      <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
      <div class="row">
        <div class="col-8 col-12-small">
          <form (ngSubmit)="onSubmit()">
            <div class="row gtr-uniform gtr-50">
              <div class="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Jméno" [(ngModel)]="name" />
              </div>
              <div class="col-6 col-12-xsmall">
                <input type="email" name="email" id="email" placeholder="E-mail" [(ngModel)]="email" />
              </div>
              <div class="col-12">
                <textarea name="message" id="message" placeholder="Zpráva" rows="4" [(ngModel)]="message"></textarea>
              </div>
            </div>
          </form>
          <ul class="actions">
            <li><input type="submit" value="Odeslat zprávu" /></li>
          </ul>
        </div>
        <div class="col-4 col-12-small">
          <ul class="labeled-icons">
            <li>
              <h3 class="icon solid fa-home"><span class="label">Adresa</span></h3>
              1234 Somewhere Rd.<br />
              Nashville, TN 00000<br />
              United States
            </li>
            <li>
              <h3 class="icon solid fa-mobile-alt"><span class="label">Telefon</span></h3>
              000-000-0000
            </li>
            <li>
              <h3 class="icon solid fa-envelope"><span class="label">E-mail</span></h3>
              <a href="#">hello&#64;untitled.tld</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit(): void {
    // Form submission placeholder
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact">
      <h2>Chci pomoci</h2>
      <p>Cena kalendáře je 430,- + cena poštovného 80,- Kč. Částku prosím uhraďte pomocí výše uvedeného QR kódu nebo na účet č. 8006566001/5500. Zároveň prosím vyplňte vaše údaje ve formuláři níže a do zprávy napište vaši adresu.</p>
      <div class="row">
        <div class="col-12">
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
            <li><input type="submit" value="Odeslat objednávku" /></li>
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

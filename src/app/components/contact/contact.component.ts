import { ChangeDetectionStrategy, Component, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact">
      <h2>Chci pomoci</h2>
      <p>Cena kalendáře je 430,- + cena poštovného 89,- Kč, tzn. 519,- Kč celkem. Částku prosím uhraďte pomocí výše uvedeného QR kódu nebo na účet č. 8006566001/5500 a do zprávy pro příjemce napište Kaledář masters. Zároveň prosím vyplňte vaše údaje ve formuláři níže a do zprávy napište vaši adresu, kam si přejete kalendář zaslat.</p>
      <p>Pokud nechcete kalendář, ale chcete podpořit projekty Aliance jakoukoliv částkou, můžete tak učinit také prostřednictvím výše uvedeného QR kódu.</p>
      <div class="row">
        <div class="col-12">
          <form #contactForm="ngForm" (ngSubmit)="submitted = true; contactForm.valid && onSubmit()">
            <div class="row gtr-uniform gtr-50">
              <div class="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Jméno" [(ngModel)]="name" required #nameField="ngModel"
                  [class.invalid]="nameField.invalid && (nameField.touched || submitted)" />
                @if (nameField.invalid && (nameField.touched || submitted)) {
                  <small class="field-error">Jméno je povinné</small>
                }
              </div>
              <div class="col-6 col-12-xsmall">
                <input type="email" name="email" id="email" placeholder="E-mail" [(ngModel)]="email" required #emailField="ngModel"
                  [class.invalid]="emailField.invalid && (emailField.touched || submitted)" />
                @if (emailField.invalid && (emailField.touched || submitted)) {
                  <small class="field-error">{{ emailField.errors?.['required'] ? 'E-mail je povinný' : 'Neplatný e-mail' }}</small>
                }
              </div>
              <div class="col-12">
                <input type="text" inputmode="tel" name="mobil" id="mobil" placeholder="Mobil" [(ngModel)]="mobil" required #mobilField="ngModel"
                  [class.invalid]="mobilField.invalid && (mobilField.touched || submitted)" />
                @if (mobilField.invalid && (mobilField.touched || submitted)) {
                  <small class="field-error">Mobil je povinný</small>
                }
              </div>
              <div class="col-12">
                <textarea name="message" id="message" placeholder="Zpráva" rows="4" [(ngModel)]="message" required #messageField="ngModel"
                  [class.invalid]="messageField.invalid && (messageField.touched || submitted)"></textarea>
                @if (messageField.invalid && (messageField.touched || submitted)) {
                  <small class="field-error">Zpráva je povinná</small>
                }
              </div>
            </div>
            <ul class="actions">
              <li>
                <input
                  type="submit"
                  value="Odeslat objednávku"
                  [disabled]="submitState() === 'loading'"
                />
              </li>
            </ul>
            @if (submitState() === 'success') {
              <p class="submit-message success">Zpráva byla úspěšně odeslána!</p>
            }
            @if (submitState() === 'error') {
              <p class="submit-message error">Odeslání se nezdařilo. Zkuste to prosím znovu.</p>
            }
          </form>
        </div>
      </div>
    </section>
  `,
  styles: `
    .actions {
      margin-top: 1.5em;
    }
    .submit-message {
      margin-top: 1em;
      padding: 0.75em 1em;
      border-radius: 4px;
    }
    .submit-message.success {
      color: #155724;
      background: #d4edda;
    }
    .submit-message.error {
      color: #721c24;
      background: #f8d7da;
    }
    input.invalid,
    textarea.invalid {
      border-color: #dc3545 !important;
    }
    .field-error {
      color: #dc3545;
      display: block;
      margin-top: 0.25em;
    }
  `,
})
export class ContactComponent {
  name = '';
  email = '';
  mobil = '';
  message = '';
  submitted = false;

  @ViewChild('contactForm') contactForm!: NgForm;

  submitState = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

  private readonly SERVICE_ID = 'service_yw1b9ad';
  private readonly TEMPLATE_ID = 'template_ms6d5de';
  private readonly PUBLIC_KEY = 'fudAVlUZqT9k5sqAv';

  async onSubmit(): Promise<void> {
    this.submitState.set('loading');

    try {
      const params = {
        name: this.name,
        email: this.email,
        message: `${this.message}\n\nMobil: ${this.mobil}`,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, params, { publicKey: this.PUBLIC_KEY });
      this.submitState.set('success');
      this.name = '';
      this.email = '';
      this.mobil = '';
      this.message = '';
      this.submitted = false;
      this.contactForm.resetForm();
    } catch {
      this.submitState.set('error');
    }
  }
}

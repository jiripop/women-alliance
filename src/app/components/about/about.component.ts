import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about">
      <header class="major">
        <h2>Kalendář, který má sílu pomáhat</h2>
      </header>
      <p>Děkujeme, že v tom jedete s námi. Kalendář  <b>Vzpěračky Masters</b> vznikl, aby spojil sílu žen se sílou pomáhat. Jeho koupí podpoříte projekt <b>„Nejde jen o prsa, jde o život!“</b> Aliance žen s rakovinou prsu.</p>
      <p>Edukační projekt „Nejde jen o prsa, jde o život!“ od roku 2013 učí studentky a studenty středních škol o důležitost prevence v boji proti rakovině prsu. Edukátorky z pacientských organizací mají dlouholeté zkušenosti s prováděním besed na středních školách i s výukou správného postupu při samovyšetřování. Jsou to pacientky s vlastní zkušeností, která je činí věrohodnými k předání informací a návodu k osobní zodpovědnosti za své zdraví. Přednášející jsou odborně certifikovány. Během přednášek jsou studentkám a studentům kromě teoretické části promítnuta videa s ukázkami provádění samovyšetřování a následuje praktický nácvik této techniky na edukačním modelu prsního fantomu.</p>
      <p>Více o projektech Aliance se dozvíte <b><a href="https://www.breastcancer.cz/" target="_blank" rel="noopener noreferrer">zde</a></b>.</p>
      <p>Děkujeme za každou objednávku. Protože každá má svou váhu.</p>
    </section>
  `,
})
export class AboutComponent {}

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
      <p><b>Děkujeme, že v tom jedete s námi.</b> Kalendář  <b>Vzpěračky Masters</b> vznikl, aby spojil sílu žen se sílou pomáhat. Jeho koupí podpoříte projekt <b>„Nejde jen o prsa, jde o život!“</b> Aliance žen s rakovinou prsu.</p>
      <p><b>Edukační projekt „Nejde jen o prsa, jde o život!“ od roku 2013 učí studentky a studenty středních škol o důležitost prevence v boji proti rakovině prsu. Edukátorky z pacientských organizací mají dlouholeté zkušenosti s prováděním besed na středních školách i s výukou správného postupu při samovyšetřování. Jsou to pacientky s vlastní zkušeností, která je činí věrohodnými k předání informací anávodu k osobní zodpovědnosti za své zdraví. Přednášející jsou odborně certifikovány. Během přednášek jsou studentkám a studentům kromě teoretické části promítnuta videa s ukázkami provádění samovyšetřování a následuje praktický nácvik této techniky na edukačním modelu prsního fantomu.</b></p>
      <p><b>Více o projektech Aliance se dozvíte <a href="https://www.breastcancer.cz/">zde</a>.</b></p>
      <p><b>Děkujeme za každou objednávku. Protože každá má svou váhu.</b></p>
    </section>
  `,
})
export class AboutComponent {}

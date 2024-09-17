import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavBlankComponent } from '../../Components/nav-blank/nav-blank.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavBlankComponent , RouterOutlet , FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}

import { Component } from '@angular/core';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationbarComponent, HeroComponent, FooterComponent, CallToActionComponent, FeaturesComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = "this is home";
}

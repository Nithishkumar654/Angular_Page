import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navigationbar.component.html',
  styleUrl: './navigationbar.component.scss'
})
export class NavigationbarComponent {
  open: boolean = false;

  toggle(): void {
    this.open = !this.open;
  }
}

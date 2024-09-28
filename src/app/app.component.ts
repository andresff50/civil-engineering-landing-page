import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TopNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'civil-engineering-landing-page';
}

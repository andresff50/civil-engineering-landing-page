import { Component } from '@angular/core';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopNavbarComponent, HeaderInfoComponent, MainNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'civil-engineering-landing-page';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  infoIcon = "fas fa-info-circle";
  infoTitle = "The Future in a Construction. WorldWide.";
  socialLinks = [
    { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
    { id: 2, icon: 'fab fa-twitter', url: 'https://www.twitter.com' },
    { id: 3, icon: 'fab fa-linkedin', url: 'https://www.linkedin.com' },
    { id: 4, icon: 'fab fa-instagram', url: 'https://www.instagram.com' }
  ];
}

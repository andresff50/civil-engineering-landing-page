import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-links',
  standalone: true,
  imports: [],
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.css',
})
export class SocialMediaLinksComponent {
  socialLinks = [
    { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
    { id: 2, icon: 'fab fa-twitter', url: 'https://www.twitter.com' },
    { id: 3, icon: 'fab fa-linkedin', url: 'https://www.linkedin.com' },
    { id: 4, icon: 'fab fa-instagram', url: 'https://www.instagram.com' },
  ];
}

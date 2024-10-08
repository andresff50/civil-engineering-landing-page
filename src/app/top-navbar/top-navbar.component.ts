import { Component } from '@angular/core';
import { TopBarInfoComponent } from './top-bar-info/top-bar-info.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [TopBarInfoComponent, SocialMediaLinksComponent],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {}

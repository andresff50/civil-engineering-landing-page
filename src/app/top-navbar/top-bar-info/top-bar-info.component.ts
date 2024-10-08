import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar-info',
  standalone: true,
  imports: [],
  templateUrl: './top-bar-info.component.html',
  styleUrl: './top-bar-info.component.css',
})
export class TopBarInfoComponent {
  infoIcon = 'fas fa-info-circle';
  infoTitle = 'The Future in a Construction. WorldWide.';
}

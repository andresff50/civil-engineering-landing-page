import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { BaseButtonComponent } from '../shared/base-button/base-button.component';

@Component({
  selector: 'app-header-info',
  standalone: true,
  imports: [LogoComponent, InfoItemComponent, BaseButtonComponent],
  templateUrl: './header-info.component.html',
  styleUrl: './header-info.component.css',
})
export class HeaderInfoComponent {
  supportInfo = {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'CUSTOM SUPPORT & SALE',
    text: '+7-495-1234567',
  };
  workingTimeInfo = {
    icon: 'fas fa-clock',
    title: 'WORKING TIME',
    text: 'MON–SAT: 08:00–18:00',
  };
  buttonText = 'Request a quote';
}

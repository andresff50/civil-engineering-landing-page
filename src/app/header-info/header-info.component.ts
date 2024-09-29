import { Component } from '@angular/core';

@Component({
  selector: 'app-header-info',
  standalone: true,
  imports: [],
  templateUrl: './header-info.component.html',
  styleUrl: './header-info.component.css'
})
export class HeaderInfoComponent {
  supportInfo = {
    title: "CUSTOM SUPPORT & SALE",
    text: "+7-495-1234567"
  };
  workingTimeInfo = {
    title: "WORKING TIME",
    text: "MON–SAT: 08:00–18:00"
  };
  buttonText = "REQUEST A QUOTE";
}
